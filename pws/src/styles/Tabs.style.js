import styled from 'styled-components';
import Colors from './Colors'

export const StyledTabs = styled.nav`
  width: calc(100% - 50px);
  position: relative;
  left: 50px;
  display: flex;
  background-color: ${Colors.shark};
  top: 25px;
  height: 40px;
  box-shadow: 3px 3px 4px -1px;

  /* @media screen and (max-width: $tablet-up) {
    left: 0;
  }

  @media screen and (max-width: $web-up) {
    overflow-y: scroll;
    max-height: 60px;
    height: 100%;
    width: 100% !important;
  } */
`

export const StyledTabsHolder = styled.a`
  display: flex;
  justify-content: space-around;
  padding: 10px 15px;
  align-items: center;
  cursor: pointer;

  /* @media screen and (max-width: $web-up) {
    min-height: 60px;
  } */
`

export const StyledTabsItem = styled.span`
  color: ${Colors.goldsand};
`

export const StyledTabsIcon = styled.svg`
  max-width: 20px;
  fill: ${Colors.emperor};
  max-height: 20px;
  margin-left: 15px;
`
