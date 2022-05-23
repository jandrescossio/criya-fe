import { AxiosRequestConfig, AxiosResponse } from 'axios'

export namespace UseFetch {
  export interface Response<T = any> {
    data: T;
    loading: boolean;
    error: Error | undefined;
    fetchData: () => void;
  }

  export interface Props {
    url: string;
    config?: AxiosRequestConfig<any> | undefined;
  }
}
