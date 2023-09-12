/* eslint-disable default-param-last */
const initialState = {
  tabs: {
    cheap: true,
    fast: false,
    optimal: false,
  },
}

const TicketsTabReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHEAP_TAB':
      return {
        ...state,
        tabs: {
          ...state.tabs,
          cheap: true,
          fast: false,
          optimal: false,
        },
      }
    case 'FAST_TAB':
      return {
        ...state,
        tabs: {
          ...state.tabs,
          cheap: false,
          fast: true,
          optimal: false,
        },
      }
    case 'OPTIMAL_TAB':
      return {
        ...state,
        tabs: {
          ...state.tabs,
          cheap: false,
          fast: false,
          optimal: true,
        },
      }
    default:
      return state
  }
}

export default TicketsTabReducer
