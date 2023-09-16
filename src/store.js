import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import transferFilter from './Reducer/TransferFilterReducer'
import getTickets from './Reducer/GetTicketsReducer'
import timeOut from './MiddleWare/timeOut'

const AppReducer = combineReducers({
  transferFilter,
  getTickets,
})

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const store = createStore(AppReducer, composeEnhancers(applyMiddleware(thunkMiddleware, timeOut)))

export default store
