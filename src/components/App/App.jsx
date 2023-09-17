import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../Header'
import TabsTickets from '../TabsTickets'
import TransferFilter from '../TransferFilter'
import TicketsList from '../TicketsList'
import getTicketsAction from '../../action/getTicketsAction'
import plane from '../../assets/image/Plane.svg'

import classes from './App.module.scss'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTicketsAction())
  }, [])
  const { loader } = useSelector((state) => state.getTickets)

  return (
    <div className={classes.wrapper}>
      {loader && <img className={classes.plane} src={plane} alt="Logo" />}
      <Header />
      <TransferFilter />
      <div className={classes['section-tickets']}>
        <TabsTickets />
        <TicketsList />
      </div>
    </div>
  )
}

export default App
