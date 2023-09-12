import Header from '../Header'
import TabsTickets from '../TabsTickets'
import TransferFilter from '../TransferFilter'
import Ticket from '../Ticket'

import classes from './App.module.scss'

function App() {
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
