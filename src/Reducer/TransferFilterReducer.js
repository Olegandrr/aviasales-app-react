/* eslint-disable default-param-last */
const initialState = {
  all: true,
  noTransfers: true,
  oneTransfer: true,
  twoTransfer: true,
  threeTransfer: true,
}

const TransferFilterReducer = (state = initialState, { type }) => {
  switch (type) {
    case 'ALL_FILTERS':
      return {
        ...state,
        all: !state.all,
        noTransfers: !state.noTransfers,
        oneTransfer: !state.oneTransfer,
        twoTransfer: !state.twoTransfer,
        threeTransfer: !state.threeTransfer,
      }
    default:
      return state
  }
}

export default TransferFilterReducer
