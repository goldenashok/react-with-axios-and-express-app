import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ResponseOptions } from '../models/ApiOption';

class ApiService {
    private static apiService: ApiService;
    client: AxiosInstance;
    option: any | undefined;

    private constructor() {
        this.option = {
            Headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:5000/',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS'
            },
            cancelToken: null
        }

        this.client = axios.create({
            ...this.option,
            validateStatus: (status) => status >= 200 && status < 400,
        });

        this.client.interceptors.request.use((config: AxiosRequestConfig | any) => {
            // Do something before request is sent
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

        // Add a response interceptor

        this.client.interceptors.response.use((response: AxiosResponse<any>) => {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        }, function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        });

    }

    public static getApiServiceInstnce(): ApiService {
        if (!ApiService.apiService) {
            ApiService.apiService = new ApiService();
        }
        return ApiService.apiService;
    }
    get(pURL: string, httpOption?: any): Promise<ResponseOptions> {
        if (!httpOption) {
            httpOption = this.option;
        }
        console.log(httpOption);
        return this.client.get(pURL, httpOption);
    }

    post(pURL: string, data?: any, httpOption?: any): Promise<ResponseOptions> {
        if (!httpOption) {
            httpOption = this.option;
        }
        return this.client.post(pURL, data, httpOption);
    }

    put(pURL: string, data?: any, httpOption?: any): Promise<ResponseOptions> {
        if (!httpOption) {
            httpOption = this.option;
        }
        return this.client.put(pURL, data, httpOption);
    }

    patch(pURL: string, data?: any, httpOption?: any): Promise<ResponseOptions> {
        if (!httpOption) {
            httpOption = this.option;
        }
        return this.client.patch(pURL, data, httpOption);
    }

    setBasePath(baseURL: string, httpOption?: any): void {
        if (!httpOption) {
            this.option = {};
        }
        this.option.baseURL = baseURL;
    }

    getOption(): any {
        return this.option;
    }

    public static getApiServiceInstance(): ApiService {
        if (!ApiService.apiService) {
            ApiService.apiService = new ApiService();
        }
        return ApiService.apiService;
    }

    setAdditionnalHeaders(headers: unknown, override?: boolean): void {
        this.option = override ? Object.assign({}, this.option, { headers }) : {};
    }
}
const myapiservice = ApiService.getApiServiceInstnce();
export default myapiservice;
// export default ApiService;
