import React from 'react'
import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css';


const MainNavigation = () => {
  const {header, logo} = classes
  return (
    <header className={header}>
      <div className={logo}>Brawllers</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Brawllers</Link>
          </li>
          <li>
            <Link to='/new-brawller'>Add new Brawller</Link>
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
