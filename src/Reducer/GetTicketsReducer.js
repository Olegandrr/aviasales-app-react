/* eslint-disable default-param-last */
const initialState = {
  loader: true,
  searchId: null,
  tickets: [],
  error: false,
  ticketСounter: 5,
}

const GetTickets = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SEARCH_ID':
      return {
        ...state,
        searchId: action.searchId,
      }
    case 'GET_TICKETS':
      return {
        ...state,
        loader: !action.loader,
        tickets: [...state.tickets, ...action.tickets],
      }
    case 'ERROR':
      return {
        ...state,
        error: true,
        loader: false,
      }
    default:
      return state
  }
}

export default GetTickets
