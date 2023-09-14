import store from '../store'

function ticketRequest() {
  const {
    GetTickets: { searchId },
  } = store.getState()
  return async (dispatch) => {
    try {
      const responseTickets = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
      if (responseTickets.status === 500) {
        dispatch(ticketRequest())
      } else {
        const jsonDataTickets = await responseTickets.json()
        dispatch({ type: 'GET_TICKETS', tickets: jsonDataTickets.tickets, loader: jsonDataTickets.stop })
        if (!jsonDataTickets.stop) {
          dispatch(ticketRequest())
        }
      }
    } catch (error) {
      dispatch({ type: 'ERROR' })
    }
  }
}

function getTicketsAction() {
  return async (dispatch) => {
    try {
      const responseId = await fetch('https://aviasales-test-api.kata.academy/search')
      const jsonDataId = await responseId.json()
      dispatch({ type: 'GET_SEARCH_ID', searchId: jsonDataId.searchId })
      dispatch(ticketRequest())
    } catch (err) {
      throw new Error('сервер не отвечает')
    }
  }
}

export default getTicketsAction
