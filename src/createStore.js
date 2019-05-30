import { createStore, applyMiddleware,compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './redux/reducers';

export const middlewares = [ReduxThunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(RootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middlewares)
  ));
