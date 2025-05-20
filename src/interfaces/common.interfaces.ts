export interface IAppResponse<T> {
  data?: T;
  success: boolean;
  code: number;
  message?: string;
  title?: string;
}
