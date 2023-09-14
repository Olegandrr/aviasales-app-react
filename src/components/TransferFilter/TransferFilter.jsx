/* eslint-disable no-shadow */
import { useSelector, useDispatch } from 'react-redux'

import filtersActions from '../../Action/TransferFilterAction'

import classes from './TransferFilter.module.scss'

function TransferFilter() {
  const dispatch = useDispatch()
  const stateTransfers = useSelector((state) => state.TransferFilter)
  const { all, noTransfers, oneTransfer, twoTransfer, threeTransfer } = stateTransfers

  const checkboxTrue = () =>
    Object.values(stateTransfers)
      .slice(1)
      .filter((value) => value === true).length

  const handleClickFilter = (e) => {
    const { id } = e.target
    if (id === 'All') {
      dispatch(filtersActions('All'))
    } else if (all) {
      dispatch(filtersActions(id))
    } else if (checkboxTrue() === 3 && !stateTransfers[id]) {
      dispatch(filtersActions('All'))
    } else {
      dispatch(filtersActions(id))
    }
  }

  return (
    <div className={classes['transfer-filter-wrapper']}>
      <h4>Количество пересадок</h4>
      <label htmlFor="All" className={classes.checkbox}>
        <input id="All" type="checkbox" onClick={handleClickFilter} />
        <span className={all ? classes['checkbox--active'] : classes['checkbox--craft']} />
        Все
      </label>

      <label htmlFor="noTransfers" className={classes.checkbox}>
        <input type="checkbox" id="noTransfers" onClick={handleClickFilter} />
        <span className={noTransfers ? classes['checkbox--active'] : classes['checkbox--craft']} />
        Без пересадок
      </label>

      <label htmlFor="oneTransfer" className={classes.checkbox}>
        <input type="checkbox" id="oneTransfer" onClick={handleClickFilter} />
        <span className={oneTransfer ? classes['checkbox--active'] : classes['checkbox--craft']} /> 1 пересадка
      </label>

      <label htmlFor="twoTransfer" className={classes.checkbox}>
        <input type="checkbox" id="twoTransfer" onClick={handleClickFilter} />
        <span className={twoTransfer ? classes['checkbox--active'] : classes['checkbox--craft']} />2 пересадки
      </label>

      <label htmlFor="threeTransfer" className={classes.checkbox}>
        <input type="checkbox" id="threeTransfer" onClick={handleClickFilter} />
        <span className={threeTransfer ? classes['checkbox--active'] : classes['checkbox--craft']} />3 пересадки
      </label>
    </div>
  )
}

export default TransferFilter
