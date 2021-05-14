import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const {header, logo} = classes
  return (
    <header className={header}>
      <div className={logo}>Brawlers</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Brawlers</Link>
          </li>
          <li>
            <Link to='/new-brawler'>Add new Brawler</Link>
          </li>
          <li>
            <Link to='/favorites'>My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
