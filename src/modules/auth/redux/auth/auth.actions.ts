
import { User } from "../../../types/user.types";
import { AuthActionTypes } from "./auth.types";

export const setPublicToken = (token: string) => ({
    type: AuthActionTypes.SET_PUBLIC_TOKEN,
    payload: token
});

export const setAuthToken = (token: string) => ({
    type: AuthActionTypes.SET_AUTH_TOKEN,
    payload: token
});

export const setUser = (user: User) => ({
    type: AuthActionTypes.SET_USER,
    payload: user
});

export const removeAuthToken = () => ({
    type: AuthActionTypes.REMOVE_AUTH_TOKEN,
});

export const expiredPublicToken = () => ({
    type: AuthActionTypes.EXPIRED_PUBLIC_TOKEN
});

export const showedOnboarding = () => ({
    type: AuthActionTypes.SHOW_ONBOARDING
});

export const hideOnboarding = () => ({
    type: AuthActionTypes.HIDE_ONBOARDING
});
