import { useSelector } from 'react-redux'

import headerClasses from './Header.module.scss'
import logo from './image/Logo.svg'

function Header() {
  const { loader } = useSelector((state) => state.getTickets)
  return (
    <header className={headerClasses.header}>
      <img
        className={loader ? headerClasses['header-logo__spinner'] : headerClasses['header-logo']}
        src={logo}
        alt="Logo"
      />
    </header>
  )
}

export default Header
