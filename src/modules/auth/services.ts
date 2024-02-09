export enum ResponseType {
    SUCCESS = 'SUCCESS',
    UNAUTHORIZED = 'UNAUTHORIZED',
    USER_NOT_FOUND = 'USER_NOT_FOUND',
    INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
    BAD_REQUEST = 'BAD_REQUEST',
    WRONG_PASSWORD = 'WRONG_PASSWORD',
    NO_AUTHENTICATION_HEADER = 'NO_AUTHENTICATION_HEADER'
}

export interface BaseResponse {
    message: string;
    type: ResponseType;
    code: string;
}

export interface SuccessResponse<T> extends BaseResponse {
    data: T
}

export interface ErrorResponse extends BaseResponse {
    invalid_args: string;
}

export interface MetaDataResponse {
    page: number;
    page_size: number;
    data_per_page: number;
    total_data: number;
}

export interface TableResponse<T> {
    meta_data: MetaDataResponse;
    raw_data?: T
}

export interface PaginationResponse<T> {
    items?: T;
    limit: number;
    offset: number;
    page: number;
}

export type ApiProps<RequestType, ResultType> = {
    request: RequestType;
    onSuccess: (data: SuccessResponse<ResultType>) => void;
    onError: (error: ErrorResponse) => void;
    onRequest?: (state: boolean) => void;
}
