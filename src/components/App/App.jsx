import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from '../Header'
import TabsTickets from '../TabsTickets'
import TransferFilter from '../TransferFilter'
import Ticket from '../Ticket'
import getTicketsAction from '../../Action/GetTicketsAction'

import classes from './App.module.scss'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTicketsAction())
  }, [])

  return (
    <div className={classes.wrapper}>
      <Header />
      <TransferFilter />
      <div className={classes['section-tickets']}>
        <TabsTickets />
        <Ticket />
      </div>
    </div>
  )
}

export default App
