import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import transferFilter from './reducer/transferFilterReducer'
import getTickets from './reducer/getTicketsReducer'
import timeOut from './service/timeOut'

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
