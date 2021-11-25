import styled from 'styled-components';
import Colors from './Colors';

export const StyledResume = styled.section`
  display: flex;
  justify-content: center;
  padding: 100px 50px;
  background-color: var(--var-education);

  /* @media screen and (max-width: $tablet-up) {
    padding: 50px 15px;
  } */
`
export const StyledResumeContainer = styled.div`
  width: 85%;
  background: $cod-gray;
  min-height: 625px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: -1px -1px 5px 1px var(--var-box-shadow-vs-top),4px 6px 8px 0 var(--var-box-shadow-vs-bottom);

  &::before,
  &::after {
    content: "";
    position: absolute;
  }

  &::before {
    width: 100%;
    height: 25px;
    background-color: white;
    top: 0;
    background: #333;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &::after {
    background: ${Colors.persimmonhex};
    width: 10px;
    border: none;
    border-radius: 50%;
    height: 10px;
    top: 7px;
    left: 4px;
    box-shadow: 16px 0 0 0 ${Colors.yelloworange}, 33px 0 0 0 ${Colors.greenmalachite};
  }
`
