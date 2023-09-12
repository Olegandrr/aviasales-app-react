/* eslint-disable default-param-last */
const initialState = {
  transfers: {
    all: true,
    noTransfers: true,
    oneTransfer: true,
    twoTransfer: true,
    threeTransfer: true,
  },
}

const TransferFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_FILTERS':
      return {
        ...state,
        transfers: {
          ...state.transfers,
          all: !state.transfers.all,
          noTransfers: !state.transfers.all,
          oneTransfer: !state.transfers.all,
          twoTransfer: !state.transfers.all,
          threeTransfer: !state.transfers.all,
        },
      }
    case 'NO_TRANSFER_FILTERS':
      return {
        ...state,
        transfers: {
          ...state.transfers,
          all: false,
          noTransfers: !state.transfers.noTransfers,
        },
      }
    case 'ONE_TRANSFER_FILTERS':
      return {
        ...state,
        transfers: {
          ...state.transfers,
          all: false,
          oneTransfer: !state.transfers.oneTransfer,
        },
      }
    case 'TWO_TRANSFER_FILTERS':
      return {
        ...state,
        transfers: {
          ...state.transfers,
          all: false,
          twoTransfer: !state.transfers.twoTransfer,
        },
      }
    case 'THREE_TRANSFER_FILTERS':
      return {
        ...state,
        transfers: {
          ...state.transfers,
          all: false,
          threeTransfer: !state.transfers.threeTransfer,
        },
      }
    default:
      return state
  }
}

export default TransferFilterReducer
