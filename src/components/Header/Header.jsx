import headerClasses from './Header.module.scss'
import logo from './image/Logo.svg'

function Header() {
  return (
    <header className={headerClasses.header}>
      <img className={headerClasses['header-logo']} src={logo} alt="Logo" />
    </header>
  )
}

export default Header
