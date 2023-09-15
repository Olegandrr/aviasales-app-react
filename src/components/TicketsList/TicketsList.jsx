import { useSelector } from 'react-redux'
import { format, add } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'

import declOfNum from '../../service/declOfNum'
import classes from '../Ticket/Ticket.module.scss'

function TicketsList() {
  const { tickets, ticketСounter } = useSelector((state) => state.GetTickets)
  const ticketsRenderList = tickets.slice(0, ticketСounter)
  const itemTransfers = (length) =>
    `${length > 0 ? length : 'Без'} ${declOfNum(length, ['пересадка', 'пересадки', 'пересадок'])}`

  const dateFormate = (date, duration) => {
    const newDate = new Date(date)
    const startTime = format(newDate, 'HH:mm')
    const endTime = format(add(newDate, { minutes: duration }), 'HH:mm')
    return `${startTime} – ${endTime}`
  }

  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 60)
    const minutes = duration % 60
    return `${hours}ч ${minutes}м`
  }
  return ticketsRenderList.map((item) => (
    <div className={classes['ticket-wrapper']} key={uuidv4()}>
      <div className={classes.a}>{item.price.toLocaleString('ru-RU')} P</div>
      <div className={classes.c1}>в пути</div>
      <div className={classes.e1}>в пути</div>
      <img className={classes.a2} src={`https://pics.avs.io/99/36/${item.carrier}.png`} alt="Logo" />
      <div className={classes.c2}>{itemTransfers(item.segments[0].stops.length)}</div>
      <div className={classes.d}>{dateFormate(item.segments[0].date, item.segments[0].duration)}</div>
      <div className={classes.f}>{dateFormate(item.segments[1].date, item.segments[1].duration)}</div>
      <div className={classes.d1}>{formatDuration(item.segments[0].duration)}</div>
      <div className={classes.f1}>{formatDuration(item.segments[1].duration)}</div>
      <div className={classes.c}>
        {item.segments[0].origin} - {item.segments[0].destination}
      </div>
      <div className={classes.e}>
        {item.segments[1].origin} - {item.segments[1].destination}
      </div>
      <div className={classes.d2}>{item.segments[0].stops.join(', ')}</div>
      <div className={classes.e2}>{itemTransfers(item.segments[1].stops.length)}</div>
      <div className={classes.f2}>{item.segments[1].stops.join(', ')}</div>
    </div>
  ))
}

export default TicketsList
