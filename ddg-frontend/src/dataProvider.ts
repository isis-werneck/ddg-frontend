import {
  hydraDataProvider,
  type ApiPlatformAdminDataProvider,
  type HydraHttpClientResponse,
} from "@api-platform/admin";
import { type GetManyParams } from "react-admin";
import { authProvider } from "./auth/authProvider";
import { client } from "./client";
import {
  CsvTemplateService,
  LoginCheckService,
  OpenAPI,
  UserService,
  type CancelablePromise,
  type PdfDownload_pdf_write,
} from "./services/openapi";

const entryPoint = import.meta.env.VITE_SIMPLE_REST_URL;

const defaultDataProvider = hydraDataProvider({
  entrypoint: entryPoint,
  httpClient: client,
});

OpenAPI.BASE = import.meta.env.VITE_SIMPLE_OPEN_API_BASE;
OpenAPI.WITH_CREDENTIALS = true;
OpenAPI.CREDENTIALS = "same-origin";
OpenAPI.TOKEN = authProvider.userToken;

export const dataProvider: ApiPlatformAdminDataProvider = {
  ...defaultDataProvider,

  /**
   * Import resources from a CSV file.
   * @param {string} resource The resource to import
   * @param {FormData} formData The CSV file to import
   * @returns {Promise<HydraHttpClientResponse>} The response
   */
  import: async (
    resource: string,
    formData: FormData,
  ): Promise<HydraHttpClientResponse> => {
    const response = await fetch(new URL(`${entryPoint}/${resource}/import`), {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${authProvider.userToken()}`,
      },
      body: formData,
    });

    return response;
  },
  downloadPdf: (input: PdfDownload_pdf_write): Promise<Response> => {
    const response = fetch(`${entryPoint}/pdf_downloads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/pdf",
        Authorization: `Bearer ${authProvider.userToken()}`,
      },
      body: JSON.stringify(input),
    });
    return response;
  },

  downloadPdfGet: (id: string): Promise<Response> => {
    const response = fetch(`${OpenAPI.BASE}${id}/download`, {
      method: "GET",
      headers: {
        Accept: "application/pdf",
        Authorization: `Bearer ${authProvider.userToken()}`,
      },
    });
    return response;
  },

  downloadCsvTemplate: async (
    resource: string,
    filename: string,
    params: {
      delimiter?: ";" | ",";
      enclosure?: '"' | "'";
      encoding?: "ISO-8859-1" | "UTF-8" | "ISO-8859-15";
    },
  ): Promise<void> => {
    const response = CsvTemplateService.csvTemplateGet(
      resource,
      params.delimiter,
      params.enclosure,
      params.encoding,
    );
    dataProvider.downloadBlob(response, filename, "text/csv");
  },

  downloadBlob: (promise: Promise<Blob>, filename: string, type?: string) => {
    promise.then((blob: Blob) => {
      blob = new Blob([blob], { type: type });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  },

  me: () => {
    return UserService.apiMeGet();
  },

  login: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): CancelablePromise<{ token: string }> => {
    return LoginCheckService.loginCheckPost({ username, password });
  },

  /**
   * Retrieves multiple records from the specified resource.
   * Needed to be overwritten to support relatinships queries.
   *
   * @param {string} resource - The name of the resource to fetch records from.
   * @param {GetManyParams} params - The parameters for fetching records.
   */
  getMany: (resource: string, params: GetManyParams) => {
    return dataProvider.getList(resource, {
      pagination: {
        perPage: params.ids?.length,
        page: 1,
      },
      filter: { id: params.ids },
      sort: { field: "", order: "ASC" },
    });
  },
  subscribe: () => Promise.reject(),
  unsubscribe: () => Promise.reject(),
};
