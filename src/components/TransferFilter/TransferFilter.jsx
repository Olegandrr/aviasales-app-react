import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import filtersActions from '../../action/TransferFilterAction'

import classes from './TransferFilter.module.scss'

function TransferFilter() {
  const dispatch = useDispatch()
  const stateTransfers = useSelector((state) => state.transferFilter)

  const checkboxTrue = () =>
    Object.values(stateTransfers)
      .slice(1)
      .filter((value) => value === true).length

  const handleClickFilter = (e) => {
    const { id } = e.target
    if (checkboxTrue() === 3 && !stateTransfers[id]) {
      dispatch(filtersActions('all'))
    } else {
      dispatch(filtersActions(id))
    }
  }

  const transfersCheckbox = [
    { id: 'all', label: 'Все' },
    { id: 'noTransfers', label: 'Без пересадок' },
    { id: 'oneTransfer', label: '1 пересадка' },
    { id: 'twoTransfer', label: '2 пересадки' },
    { id: 'threeTransfer', label: '3 пересадки' },
  ]

  return (
    <div className={classes['transfer-filter-wrapper']}>
      <h4>Количество пересадок</h4>
      {transfersCheckbox.map(({ id, label }) => (
        <label htmlFor={id} className={classes.checkbox} key={uuidv4()}>
          <input id={id} type="checkbox" onClick={handleClickFilter} />
          <span className={stateTransfers[id] ? classes['checkbox--active'] : classes['checkbox--craft']} />
          {label}
        </label>
      ))}
    </div>
  )
}

export default TransferFilter
