import { AxiosResponse } from 'axios';

export interface ResponseType {}
export const responseBody = <T>(response: AxiosResponse<T>) => response.data;
