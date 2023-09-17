import { useSelector } from 'react-redux'
import { format, add } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'
import { Fragment } from 'react'

import ShowMoreTickets from '../ShowMoreTickets'
import declOfNum from '../../service/declOfNum'

import classes from './TicketsList.module.scss'

function TicketsList() {
  const { tickets, ticketCounter, loader } = useSelector((state) => state.getTickets)
  const stateTransfers = useSelector((state) => state.transferFilter)
  const { all, ...transfersFilters } = stateTransfers

  const filterTransfer = () => {
    let total = []
    Object.entries(transfersFilters).forEach((item, index) => {
      if (item[1]) {
        const filterList = tickets.filter((it) => it.segments[0].stops.length === index)
        total = [...total, ...filterList]
      }
    })
    return total
  }

  const ticketsFilterList = all ? tickets : filterTransfer()
  const ticketsRenderList = ticketsFilterList.slice(0, ticketCounter)

  const numberOfTransfers = (length) =>
    `${length > 0 ? length : 'Без'} ${declOfNum(length, ['пересадка', 'пересадки', 'пересадок'])}`

  const dateFormate = (date, duration) => {
    const newDate = new Date(date)
    const startTime = format(newDate, 'HH:mm')
    const endTime = format(add(newDate, { minutes: duration }), 'HH:mm')
    return `${startTime} – ${endTime}`
  }

  const durationFormat = (duration) => {
    const hours = Math.floor(duration / 60)
    const minutes = duration % 60
    return `${hours}ч ${minutes}м`
  }

  const segment = (segments) =>
    segments.map(({ origin, destination, stops, date, duration }, index) => (
      <Fragment key={uuidv4()}>
        <div className={[classes[`stops${index}`], classes['font-grey']].join(' ')}>
          {numberOfTransfers(stops.length)}
        </div>
        <div className={classes[`time${index}`]}>{dateFormate(date, duration)}</div>
        <div className={classes[`duration${index}`]}>{durationFormat(duration)}</div>
        <div className={classes[`transfers${index}`]}>{stops.join(', ')}</div>
        <div className={[classes[`cities${index}`], classes['font-grey']].join(' ')}>
          {origin} - {destination}
        </div>
      </Fragment>
    ))

  const ticketForRender = ticketsRenderList.map(({ price, carrier, segments }) => (
    <div key={uuidv4()} className={classes['ticket-wrapper']}>
      <div className={classes.price}>{price.toLocaleString('ru-RU')} P</div>
      <div className={[classes.text0, classes['font-grey']].join(' ')}>в пути</div>
      <div className={[classes.text1, classes['font-grey']].join(' ')}>в пути</div>
      <img className={classes.logo} src={`https://pics.avs.io/99/36/${carrier}.png`} alt="Logo" />
      {segment(segments)}
    </div>
  ))

  const isTickets = ticketForRender.length === 0

  return (
    <div>
      {isTickets && !loader ? (
        <span className={[classes['ticket-wrapper'], classes['not-found']].join(' ')}>
          Рейсов, подходящих под заданные фильтры, не найденo
        </span>
      ) : (
        ticketForRender
      )}
      {!isTickets && <ShowMoreTickets />}
    </div>
  )
}

export default TicketsList
