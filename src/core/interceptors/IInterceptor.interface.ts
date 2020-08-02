import { AxiosStatic } from 'axios';

export interface IInterceptor {
    addAuthorizationHeader(axios: AxiosStatic, type: string): void;
}
