/* eslint-disable no-shadow */
// import { useSelector } from 'react-redux'

import store from '../../store'

import classes from './TransferFilter.module.scss'

function TransferFilter() {
  // const state = useSelector((state) => state)
  console.log(store.getState())

  return (
    <div className={classes['transfer-filter-wrapper']}>
      <h4>Количество пересадок</h4>
      <label htmlFor="All" className={classes.checkbox}>
        <input id="All" type="checkbox" />
        <span className={classes['checkbox--craft']} />
        <span>Все</span>
      </label>

      <label htmlFor="No" className={classes.checkbox}>
        <input type="checkbox" id="No" />
        <span className={classes['checkbox--craft']} />
        Без пересадок
      </label>

      <label htmlFor="One" className={classes.checkbox}>
        <input type="checkbox" id="One" />
        <span className={classes['checkbox--craft']} /> 1 пересадка
      </label>

      <label htmlFor="Two" className={classes.checkbox}>
        <input type="checkbox" id="Two" />
        <span className={classes['checkbox--craft']} />2 пересадки
      </label>

      <label htmlFor="Three" className={classes.checkbox}>
        <input type="checkbox" id="Three" />
        <span className={classes['checkbox--craft']} />3 пересадки
      </label>
    </div>
  )
}

export default TransferFilter
