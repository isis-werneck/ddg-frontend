import { type AuthProvider } from "react-admin";

import { dataProvider } from "../dataProvider";
import type { Role } from "../types/Role";
import { canAccess } from "./canAccess";

export const authProvider: AuthProvider = {
  _identity: {},
  login: async ({ username, password }) => {
    const { token } = await dataProvider.login({ username, password });
    localStorage.setItem("auth_token", token);
    return token ? Promise.resolve() : Promise.reject();
  },

  logout: () => {
    // Remove the token from localStorage
    localStorage.removeItem("auth_token");
    return Promise.resolve();
  },

  checkError: async (error: { response?: Response } & Response) => {
    if (error?.status === 401 || error?.response?.status === 401) {
      const json = await error?.response?.json();
      if (
        ["Expired JWT Token", "Invalid credentials."].indexOf(json?.message) !==
        -1
      ) {
        throw new Error("ra.auth.token_expired");
      }
    }
  },

  async getIdentity() {
    const tokenData = this.tokenData();
    if (tokenData?.id) {
      if (this._identity?.id === tokenData.id) {
        return this._identity;
      }

      const me = await dataProvider.me();

      if (me && me.id === tokenData.id) {
        this._identity = {
          id: me.id,
          fullName:
            (me.firstName || me.userName) + " " + (me.firstSurname || ""),
          avatar: me.avatar,
          user: me,
        }
        return this._identity;
      }
    }

    return Promise.reject();
  },

  async checkAuth() {
    const reason = this.tokenData()?.id
      ? this.getExpirationDate() > new Date()
        ? ""
        : "ra.auth.token_expired"
      : "ra.auth.auth_check_error";
    if (reason) {
      throw new Error(reason);
    }
    return Promise.resolve();
  },

  getPermissions() {
    const roles = this.tokenData()?.roles || [];
    const hasRole = (role: Role) => roles.indexOf(role) !== -1;
    return Promise.resolve({ roles, hasRole });
  },
  async handleCallback() {
    /* ... */
  }, // for third-party authentication only
  async canAccess(params) {
    const tokenData = this.tokenData();
    const userRoles = (tokenData?.roles as Role[]) || [];
    const userId = tokenData?.["@id"] || 0;
    const identity = { id: userId, roles: userRoles };
    return canAccess(identity, params);
  },

  userToken() {
    const token = localStorage.getItem("auth_token");
    return token;
  },

  tokenData() {
    const token = this.userToken();
    if (token) {
      const tokenData = JSON.parse(atob(token.split(".")[1]));
      return tokenData;
    }
    return null;
  },

  getExpirationDate() {
    const tokenData = this.tokenData();
    if (tokenData) {
      return new Date(tokenData.exp * 1000);
    }
    return null;
  },
};
