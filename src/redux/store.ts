import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares: any = [thunk];

// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
// }

export const store = createStore(
  rootReducer, applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);

export type { RootState } from './root-reducer';

export type AppDispatch = typeof store.dispatch
 