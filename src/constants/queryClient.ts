import { DefaultOptions, QueryClient } from '@tanstack/react-query';
import { config } from './env';
import { Environment } from './common';

const staleTime =
  config.env.VITE_ENV === Environment.DEVELOP ? 5 * 60 * 1000 : 1 * 60 * 1000;

const defaultOptions: DefaultOptions = {
  queries: {
    staleTime,
    refetchOnMount: true,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
    retryOnMount: false,
  },
};

export const queryClientDefaultOptions = {
  defaultOptions,
};

export const queryClient = new QueryClient({
  defaultOptions,
});
