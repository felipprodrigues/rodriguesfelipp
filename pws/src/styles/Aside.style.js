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
