import React, { Fragment } from 'react';
import profilePicture from '../assets/profile.png';
import defs from '../assets/defs.svg';
import { HeaderEl, HeaderTitle, HeaderFrame, HeaderImage, HeaderName, HeaderSubtitle } from '../styles/Header.style';
import { Switch, SwitchCheckbox, SwitchCheckmark, SwitchCheckMarkSVG, SwitchOverlay } from '../styles/Switch.style';

const Header = () => {
  function toggleDark() {
    let darkMode = localStorage.getItem('darkMode');
    const darkModeToggle = document.getElementById('switch');

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

    // FIX
    if (darkModeToggle.defaultChecked === false ){
      disableDarkMode()
    } else(
      enableDarkMode()
    )

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

      <HeaderEl>
        <Switch onClick={toggleDark} for="checkbox" id="switch">
          <SwitchCheckbox type="checkbox"></SwitchCheckbox>
          <SwitchCheckmark>
            <SwitchCheckMarkSVG>
              <use href={defs + '#icon-moon'}></use>
            </SwitchCheckMarkSVG>
            <SwitchCheckMarkSVG>
              <use href={defs + '#icon-sun'}></use>
            </SwitchCheckMarkSVG>
            <SwitchOverlay />
          </SwitchCheckmark>
        </Switch>

        {/* RESPONSIVE DOWNLOAD BUTTON FOR RESPONSIVE */}
        {/* <a className="header__holder" href="#" download="">
          <svg className="header__icon">

          </svg>
        </a> */}

        <HeaderFrame>
          <HeaderImage src={profilePicture} alt="profilePicture"></HeaderImage>
        </HeaderFrame>
        <HeaderTitle>
          <HeaderName>Felipe Rodrigues</HeaderName>
          <HeaderSubtitle>Frontend Developer</HeaderSubtitle>
        </HeaderTitle>
      </HeaderEl>

    </Fragment>
  )
}

export default Header;

