import { useSelector } from 'react-redux'

import Ticket from '../Ticket'

function TicketsList() {
  const { tickets, ticketСounter } = useSelector((state) => state.GetTickets)
  const ticketsRenderList = tickets.slice(0, ticketСounter)
  return ticketsRenderList.map(() => <Ticket />)
}

export default TicketsList
