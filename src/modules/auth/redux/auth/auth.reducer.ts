import { AnyAction } from 'redux';
import { User } from "../../../types/user.types";
import { AuthActionTypes } from './auth.types';

export interface AuthState {
    publicToken: string | null;
    authToken: string | null;
    user: User | null;
    showOnboarding: boolean;
}

const initialState: AuthState = {
    publicToken: null,
    authToken: null,
    user: null,
    showOnboarding: false,
}

const authReducer = (state: AuthState = initialState, action: AnyAction) => {
    switch (action.type) {
        case AuthActionTypes.SET_PUBLIC_TOKEN:
            return {
                ...state,
                publicToken: action.payload
            }
        case AuthActionTypes.SET_AUTH_TOKEN:
            return {
                ...state,
                authToken: action.payload
            }
        case AuthActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case AuthActionTypes.REMOVE_AUTH_TOKEN:
            return {
                ...state,
                authToken: null,
                email: null,
                showOnboarding: false,
            }
        case AuthActionTypes.SHOW_ONBOARDING:
            return {
                ...state,
                showOnboarding: true,
            }
        case AuthActionTypes.HIDE_ONBOARDING:
            return {
                ...state,
                showOnboarding: false,
            }
        default:
            return state;
    }
}

export default authReducer;
