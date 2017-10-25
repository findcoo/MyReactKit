import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import DevTools from './containers/DevTools';

const reducer = combineReducers({ });
const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = createLogger();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  applyMiddleware(loggerMiddleware),
  DevTools.instrument()
);

export default function mainStore(preloadedState) {
  return createStore(reducer, preloadedState, enhancer);
}
