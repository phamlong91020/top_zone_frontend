/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig } from 'axios';
import { apiClient } from './axiosInstance';
import { IAppResponse } from '@/interfaces';

export const axiosService = {
  post: async <TResponse = any, TRequest = any>(
    url: string,
    body?: TRequest,
    config?: AxiosRequestConfig<TRequest>
  ): Promise<IAppResponse<TResponse>> => {
    return await apiClient.post(url, body, config);
  },

  get: async <TResponse = any, TRequest = any>(
    url: string,
    config?: AxiosRequestConfig<TRequest>
  ): Promise<IAppResponse<TResponse>> => {
    return await apiClient.get(url, config);
  },

  put: async <TResponse = any, TRequest = any>(
    url: string,
    body?: TRequest,
    config?: AxiosRequestConfig<TRequest>
  ): Promise<IAppResponse<TResponse>> => {
    return await apiClient.put(url, body, config);
  },

  patch: async <TResponse, TRequest = any>(
    url: string,
    body?: TRequest,
    config?: AxiosRequestConfig<TRequest>
  ): Promise<IAppResponse<TResponse>> => {
    return await apiClient.patch(url, body, config);
  },

  delete: async <TResponse = any, TRequest = any>(
    url: string,
    body?: TRequest,
    config?: AxiosRequestConfig<TRequest>
  ): Promise<IAppResponse<TResponse>> => {
    return await apiClient.delete(url, {
      ...config,
      data: body,
    });
  },

  request: async <TResponse = any, TRequest = any>(
    url: string,
    config?: AxiosRequestConfig<TRequest>
  ): Promise<IAppResponse<TResponse>> => {
    return await apiClient.request({
      url,
      ...config,
    });
  },
};
