import { useDispatch } from 'react-redux'

import showMoreTicketsAction from '../../Action/showMoreTicketsAction'

import classes from './ShowMoreTickets.module.scss'

function ShowMoreTickets() {
  const dispatch = useDispatch()
  const handleClickButton = () => {
    dispatch(showMoreTicketsAction())
  }
  return (
    <button className={classes['show-more-button']} onClick={handleClickButton} type="button">
      Показать еще 5 билетов!
    </button>
  )
}

export default ShowMoreTickets
