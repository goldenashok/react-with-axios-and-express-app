export interface ResponseOptions {
    status: number | undefined;
    data?: any;
    headers?: any;
}

export enum StatusCode {
    SUCCESS = 200,
    SERVICE_ERROR = 500,
    BAD_REQUEST = 400,
    METHOD_NOT_FOUND = 405,
}