import { useSelector } from 'react-redux'

import logo from '../../assets/image/Logo.svg'

import headerClasses from './Header.module.scss'

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
