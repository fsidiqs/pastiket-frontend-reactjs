import { AxiosResponse } from 'axios';
import axios from '../../axios';
import {  ApiProps, BaseResponse, SuccessResponse, ErrorResponse  } from "./services";

type LoginRequest = {
    email: string;
    password: string;
}

type Login = {
    auth_token: string;
}
// export const login = async (props: ApiProps<LoginRequest, )

export const login = async (props: ApiProps<LoginRequest, Login>): Promise<void> => {
    props.onRequest?.(true);
    try {
        const { data }: AxiosResponse<BaseResponse> = await axios.post(
            '/consumer/v1/auth/login',
            props.request,
        );
        props.onSuccess(data as SuccessResponse<Login>);
    } catch (error: any) {
        props.onError(error.response.data as ErrorResponse);
    }
    props.onRequest?.(false);
}
