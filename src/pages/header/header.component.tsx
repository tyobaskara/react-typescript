import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'

const Header = () => {
  return (
    <header className="App-header">
      <ul className='App-menu'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
