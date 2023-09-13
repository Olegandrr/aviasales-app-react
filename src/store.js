import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import reduxThank from 'redux-thunk'

import TransferFilter from './Reducer/TransferFilterReducer'
import TicketsTab from './Reducer/TicketsTabReducer'
import logger from './MiddleWare/logger'
import timeOut from './MiddleWare/timeOut'

const AppReducer = combineReducers({
  TransferFilter,
  TicketsTab,
})

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const store = createStore(AppReducer, composeEnhancers(applyMiddleware(logger, timeOut, reduxThank)))

export default store
