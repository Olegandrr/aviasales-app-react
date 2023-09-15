import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import TransferFilter from './Reducer/TransferFilterReducer'
import TicketsTab from './Reducer/TicketsTabReducer'
import GetTickets from './Reducer/GetTicketsReducer'
import timeOut from './MiddleWare/timeOut'

const AppReducer = combineReducers({
  TransferFilter,
  TicketsTab,
  GetTickets,
})

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const store = createStore(AppReducer, composeEnhancers(applyMiddleware(thunkMiddleware, timeOut)))

export default store
