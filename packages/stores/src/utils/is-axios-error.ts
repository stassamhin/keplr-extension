import { AxiosError } from "axios";

export const isAxiosError = <T = any>(
  v: any | AxiosError<T>
): v is AxiosError<T> => v.isAxiosError;
