import styled from 'styled-components';
import colors from './Colors'

export const Switch = styled.label`
  width: 75px;
  height: 35px;
  position: absolute;
  right: 1.5em;
  top: 0.7em;

  & span {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 30px;
    background: ${colors.emperor };
  }

  &:checked + span div {
    transform: translateX(38px)
  }
`;

export const SwitchCheckbox = styled.input`
  ${Switch} & {
    width: 75px;
    height: 35px;
    opacity: 0;
    margin: 0;
    z-index: 999;
    position: absolute;
    cursor: pointer;
  }
`

export const SwitchCheckmark = styled.span`
  width: 40px;
  height: 40px;

`

export const SwitchCheckMarkSVG = styled.svg`
  ${SwitchCheckmark} & {
    max-width: 25px;
    max-height: 25px;
    fill: ${colors.bluemalibu};
  }
`

export const SwitchOverlay = styled.div`
  position: absolute;
  height: 30px;
  width: 30px;
  border-radius: 40%;
  left: 3px;
  transition: all 0.25s linear;
  z-index: 998;
  background: ${colors.silversand};
  box-shadow: inset 0 8px 32px 0 ${colors.jacksonspurple};
  border: 1px solid ${colors.opaquewhite};
`
