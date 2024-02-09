import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import authReducer, {
   AuthState,
} from "../modules/auth/redux/auth/auth.reducer";


const persistConfig = {
   key: "root",
   storage,
   transforms: [
      encryptTransform({
         secretKey: process.env.REACT_APP_REDUX_SECRET as string,
      }),
   ],
   whitelist: [
      "auth",
      "authConsumer",
      "onboarding",
      "i18n",
      "turnoverForecasting",
   ],
};

export interface RootState {
   auth: AuthState;
   //    authConsumer: AuthConsumerState;
   //    onboarding: OnboardingState;
   //    i18n: I18nState;
   //    turnoverForecasting: TurnoverForecastingState;
}

const rootReducer = combineReducers({
   auth: authReducer,
   //    authConsumer: authConsumerReducer,
   //    onboarding: onboardingReducer,
   //    i18n: i18nReducer,
   //    turnoverForecasting: turnoverForecastingReducer,
});

export default persistReducer(persistConfig, rootReducer);
