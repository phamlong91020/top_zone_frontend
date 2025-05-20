/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAppResponse } from '@/interfaces';
import { UseMutationOptions } from '@tanstack/react-query';

export type TLiteralUnion<T extends U, U = string> =
  | T
  | (Record<never, never> & U);

export type IAppMutationOptions<
  TVariables,
  TResponse = any,
  TError = any,
  TContext = unknown,
> = UseMutationOptions<IAppResponse<TResponse>, TError, TVariables, TContext>;
