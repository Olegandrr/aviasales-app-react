/* eslint-disable default-param-last */
const initialState = {
  all: true,
  noTransfers: true,
  oneTransfer: true,
  twoTransfer: true,
  threeTransfer: true,
}

const transferFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_FILTERS':
      return {
        ...state,
        all: !state.all,
        noTransfers: !state.all,
        oneTransfer: !state.all,
        twoTransfer: !state.all,
        threeTransfer: !state.all,
      }
    case 'NO_TRANSFER_FILTERS':
      return {
        ...state,
        all: false,
        noTransfers: !state.noTransfers,
      }
    case 'ONE_TRANSFER_FILTERS':
      return {
        ...state,
        all: false,
        oneTransfer: !state.oneTransfer,
      }
    case 'TWO_TRANSFER_FILTERS':
      return {
        ...state,
        all: false,
        twoTransfer: !state.twoTransfer,
      }
    case 'THREE_TRANSFER_FILTERS':
      return {
        ...state,
        all: false,
        threeTransfer: !state.threeTransfer,
      }
    default:
      return state
  }
}

export default transferFilter
