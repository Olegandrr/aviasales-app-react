import { v4 as uuidv4 } from 'uuid'

import tabsClasses from './TabsTickets.module.scss'

function TabsTickets() {
  const button = [
    { name: 'Cheap', text: 'Самый дешевый' },
    { name: 'Fast', text: 'Самый быстрый' },
    { name: 'Optimal', text: 'Оптимальный' },
  ]
  return (
    <div className={tabsClasses['tabs-wrapper']}>
      {button.map((item) => (
        <button className={tabsClasses['tabs-button']} name={item.name} type="button" key={uuidv4()}>
          {item.text}
        </button>
      ))}
    </div>
  )
}

export default TabsTickets
