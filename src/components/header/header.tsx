import React from 'react';
import './header.css';

export const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header__container'>
          <h2>{}</h2>
          <nav className='header__nav'>
            <ul className='header__ul'>
              <li>Let's Think!</li>
              <li>Ranking</li>
              <li>Login</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}