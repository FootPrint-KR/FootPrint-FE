import { AxiosRequestConfig, AxiosError } from "axios";

import client from "./client";
import { ApiResponse } from "./types";

export async function get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  const response = await client.get<ApiResponse<T>>(url, config);
  return response.data.data;
}

export async function post<T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await client.post<ApiResponse<T>>(url, data, config);
  return response.data.data;
}

export async function put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
  const response = await client.put<ApiResponse<T>>(url, data, config);
  return response.data.data;
}

export async function patch<T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  const response = await client.patch<ApiResponse<T>>(url, data, config);
  return response.data.data;
}

export async function del<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  const response = await client.delete<ApiResponse<T>>(url, config);
  return response.data.data;
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof AxiosError) {
    return error.response?.data?.message || error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "알 수 없는 에러가 발생했습니다.";
}
