import { v4 as uuidv4 } from 'uuid'
import { useSelector, useDispatch } from 'react-redux'

import tabsTicketsAction from '../../Action/tabsTicketsAction'

import tabsClasses from './TabsTickets.module.scss'

function TabsTickets() {
  const dispatch = useDispatch()
  const { activeTab } = useSelector((state) => state.getTickets)
  const classActiveButton = [tabsClasses['tabs-button-active'], tabsClasses['tabs-button']].join(' ')
  const button = [
    { name: 'cheap', text: 'Самый дешевый' },
    { name: 'fast', text: 'Самый быстрый' },
    { name: 'optimal', text: 'Оптимальный' },
  ]

  const handleClickButtonTab = (e) => {
    const { name } = e.target
    dispatch(tabsTicketsAction(name))
  }
  return (
    <div className={tabsClasses['tabs-wrapper']}>
      {button.map((item) => (
        <button
          className={item.name === activeTab ? classActiveButton : tabsClasses['tabs-button']}
          name={item.name}
          onClick={handleClickButtonTab}
          type="button"
          key={uuidv4()}
        >
          {item.text}
        </button>
      ))}
    </div>
  )
}

export default TabsTickets
