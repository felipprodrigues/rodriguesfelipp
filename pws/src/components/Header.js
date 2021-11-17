import React, { Fragment } from 'react';
import colors from './colors';
import '../styles/breakpoints.scss';
import '../styles/header.scss';
import '../styles/inputs.scss';
import profilePicture from '../assets/profile.png';
import defs from '../assets/defs.svg'

const Header = () => {
  function toggleDark() {
    let darkMode = localStorage.getItem('darkMode');
    const darkModeToggle = document.querySelector('.switch');

    const enableDarkMode = () => {
      document.body.classList.add('darkMode');
      localStorage.setItem('darkMode', 'enabled');
    }

    const disableDarkMode = () => {
      document.body.classList.remove('darkMode');
      localStorage.setItem('darkMode', null);
    }

    if (darkMode === 'enabled') {
      enableDarkMode();
    }

    darkModeToggle.addEventListener('click', () => {
      darkMode = localStorage.getItem('darkMode')
      if (darkMode !== 'enabled') {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    })
  }

  return (
    <Fragment>

      <div className="header">
        <label for="checkbox" className="switch" onClick={toggleDark}>
          <input type="checkbox" id="switch__checkbox" className="switch__checkbox"></input>
          <span className="switch__checkmark checkmark">
            <svg className="checkmark checkmark__svg">
              <use href={defs + '#icon-moon'}></use>
            </svg>
            <svg className="checkmark checkmark__svg">
              <use href={defs + '#icon-sun'}></use>
            </svg>
            <div className="switch__overlay"></div>
          </span>
        </label>
        <a className="header__holder" href="#" download="">
          <svg className="header__icon">

          </svg>
        </a>

        <div className="header__frame">
          <img src={profilePicture} className="header__image" alt="profilePicture"></img>
        </div>
        <div className="header__title">
          <h1 className="header__name">Felipe Rodrigues</h1>
          <span className="header__subtitle">Frontend Developer</span>
        </div>
      </div>

    </Fragment>
  )
}

export default Header;

