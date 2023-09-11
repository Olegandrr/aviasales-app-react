import { createStore } from 'redux'

import TransferFilterReducer from './Reducer/TransferFilterReducer'

const store = createStore(TransferFilterReducer)

export default store
