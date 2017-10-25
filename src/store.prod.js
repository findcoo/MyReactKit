import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const reducer = combineReducers({ });
const sagaMiddleware = createSagaMiddleware()

export default function mainStore(preloadedState) {
  return createStore(
    reducer,
    preloadedState,
    applyMiddleware(sagaMiddleware)
  );
}
