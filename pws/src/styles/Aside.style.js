import styled from 'styled-components';
import Colors from './Colors';

export const StyledAside = styled.aside`
  width: 50px;
  height: 100%;
  background: ${Colors.mineshaftdarker};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  position: absolute;
  top: 0;
`
export const StyledAsideList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const StyledAsideElements = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  transition: all .25s ease-in;
  border-left: 1px solid transparent;

  &:first-child {
    margin-top: 25px;
  }

  &:hover {
    background-color: ${Colors.graymineshaft};
  }

  &:hover svg {
    fill: white;
  }
`

export const StyledAsideButton = styled.a`
  cursor: pointer;
  padding: 10px;
  display: inherit;
  position: relative;
  transition: all .5s ease-in;

  &:hover > span {
    display: inline ruby;
  }

  /* AS CONST BELOW  */
  /* &--selected svg {
      fill: white;
    } */
`

export const StyledAsideButtonSelected = styled.a`
  & > svg {
    fill: white
  }
`

export const StyledAsideIcon = styled.svg`
  max-width: 23px;
  max-height: 23px;
`

export const StyledAsideTooltip = styled.span`
  display: none;
  left: 57px;
  top: 10px;
  color: ${Colors.grayalto};
  padding: 3px 10px;
  z-index: 9999;
  font-size: 14px;
  position: absolute;
  background: ${Colors.shark};
  border: 1px solid ${Colors.tundora};

  &::before {
    content: '';
    position: absolute;
    background: ${Colors.shark};
    border: 1px solid ${Colors.tundora};
    width: 10px;
    height: 10px;
    left: -6px;
    top: 5px;
    transform: rotate(45deg);
    border-top: transparent;
    border-right: transparent;
  }
`
