import { AxiosStatic, AxiosRequestConfig } from 'axios';
import { IInterceptor } from './IInterceptor.interface';

class Interceptor implements IInterceptor {
    addAuthorizationHeader = (axios: AxiosStatic, token: string) => {
        axios.interceptors.request.use((request: AxiosRequestConfig) => {
            request.headers.Authorization = `Bearer ${token}`;
            return request;
        });
    };
}

export default new Interceptor();
