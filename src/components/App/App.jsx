import { Provider } from 'react-redux'

import Header from '../Header'
import TabsTickets from '../TabsTickets'
import TransferFilter from '../TransferFilter'
import Ticket from '../Ticket'
import store from '../../store'

import classes from './App.module.scss'

function App() {
  return (
    <Provider store={store}>
      <div className={classes.wrapper}>
        <Header />
        <TransferFilter />
        <div className={classes['section-tickets']}>
          <TabsTickets />
          <Ticket />
        </div>
      </div>
    </Provider>
  )
}

export default App
