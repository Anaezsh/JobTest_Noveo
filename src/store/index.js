import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';

export default function configureStore() {
  const logger = createLogger()
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  )

  return store
}
