import { createSelector } from 'reselect';
import { RootState } from '../../../../redux/store';

const selectAuthState = (state: RootState) => state.auth;

export const selectPublicToken = createSelector(
    [selectAuthState],
    auth => auth.publicToken
);

export const selectAuthToken = createSelector(
    [selectAuthState],
    auth => auth.authToken
);

export const selectUser = createSelector(
    [selectAuthState],
    auth => auth.user
);

export const selectShowOnboarding = createSelector(
    [selectAuthState],
    auth => auth.showOnboarding
);
