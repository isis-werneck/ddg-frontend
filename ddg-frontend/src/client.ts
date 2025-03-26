import {
  type HttpClientOptions,
  type HydraHttpClientResponse,
  fetchHydra,
} from "@api-platform/admin";
import { authProvider } from "./auth/authProvider";

export const client = (
  url: URL,
  options: HttpClientOptions = {},
): Promise<HydraHttpClientResponse> => {
  const token = authProvider.userToken();
  const authOptions = {
    ...options,
  };
  if (token) {
    authOptions.headers = {
      ...authOptions.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  const response = fetchHydra(url, authOptions);
  return response;
};
