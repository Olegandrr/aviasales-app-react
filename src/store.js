import { createStore, combineReducers } from 'redux'

import TransferFilter from './Reducer/TransferFilterReducer'
import TicketsTab from './Reducer/TicketsTabReducer'

const AppReducer = combineReducers({
  TransferFilter,
  TicketsTab,
})

const store = createStore(AppReducer)

export default store
