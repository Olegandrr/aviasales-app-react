/* eslint-disable default-param-last */
const initialState = {
  cheap: true,
  fast: false,
  optimal: false,
}

const ticketsTabReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHEAP_TAB':
      return {
        ...state,
        cheap: true,
        fast: false,
        optimal: false,
      }
    case 'FAST_TAB':
      return {
        ...state,
        cheap: false,
        fast: true,
        optimal: false,
      }
    case 'OPTIMAL_TAB':
      return {
        ...state,
        cheap: false,
        fast: false,
        optimal: true,
      }
    default:
      return state
  }
}

export default ticketsTabReducer
