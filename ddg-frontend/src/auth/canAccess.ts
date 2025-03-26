import type { QueryFunctionContext, UserIdentity } from "react-admin";
import type { Role } from "../types/Role";
import {
  Permissions,
  type PermissionItem,
  type RecordFunction,
} from "./permissions";

type ParamsType = QueryFunctionContext & {
  action: string;
  resource: string;
  record?: Record<string, unknown>;
};

export const canAccess = (
  user: UserIdentity,
  params: ParamsType,
): Promise<boolean> => {
  const roles = (user.roles as Role[]) || [];
  for (const role of roles) {
    const userPermissions = Permissions[role] || {};
    if (checkPermissions(userPermissions, params, user)) {
      return Promise.resolve(true);
    }
  }
  return Promise.resolve(false);
};

function checkPermissions(
  userPermissions: PermissionItem,
  params: ParamsType,
  user: UserIdentity,
) {
  const { resource, action, record } = params;
  if (typeof userPermissions === "boolean") {
    return userPermissions;
  }

  const item: PermissionItem | RecordFunction =
    userPermissions[resource] || userPermissions[action] || userPermissions.record ||false;

  switch (typeof item) {
    case "string":
      return item === "*";
    case "boolean":
      return item;
    case "function":
      if (!record) {
        return false;
      }
      return item(user, record);
    case "object":
      return checkPermissions(item, params, user);
  }
  return false;
}
