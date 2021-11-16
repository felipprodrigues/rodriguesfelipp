import React, { Fragment }from 'react';
import '../styles/colors.scss';
import '../styles/breakpoints.scss';
import '../styles/header.scss';
import '../styles/inputs.scss';
import profilePicture from '../assets/profile.png';

const Header = () => {
  return (
    <Fragment>

      <div className="header">
        <label for="checkbox" className="switch">
          <input type="checkbox" id="switch__checkbox" className="switch__checkbox"></input>
          <span className="switch__checkmark checkmark">
            <svg className="checkmark checkmark__svg"></svg>
            <svg className="checkmark checkmark__svg"></svg>
            <div className="switch__overlay"></div>
          </span>
        </label>
        <a className="header__holder" href="#" download="">
          <svg className="header__icon"></svg>
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

