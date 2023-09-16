/* eslint-disable default-param-last */
const initialState = {
  loader: true,
  searchId: null,
  tickets: [],
  error: false,
  ticketСounter: 5,
  activeTab: '',
}

const getTickets = (state = initialState, action) => {
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
    case 'SHOW_MORE_TICKETS':
      return {
        ...state,
        ticketСounter: state.ticketСounter + 5,
      }
    case 'CHEAP_TAB':
      return {
        ...state,
        activeTab: action.name,
        tickets: state.tickets.sort((a, b) => a.price - b.price),
      }
    case 'FAST_TAB':
      return {
        ...state,
        activeTab: action.name,
        tickets: state.tickets.sort(
          (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
        ),
      }
    case 'OPTIMAL_TAB':
      return {
        ...state,
        activeTab: action.name,
        tickets: state.tickets.sort(
          (a, b) =>
            a.segments[0].duration +
            a.segments[1].duration +
            a.price -
            (b.segments[0].duration + b.segments[1].duration + b.price)
        ),
      }
    default:
      return state
  }
}

export default getTickets
