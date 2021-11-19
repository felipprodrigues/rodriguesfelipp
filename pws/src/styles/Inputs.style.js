import styled from 'styled-components';

export const Switch = styled.label`
  width: 75px;
  height: 35px;
  cursor: pointer;
  position: absolute;
  right: 1.5em;
  top: 0.7em;

  & {
    & + .CheckMark {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-radius: 30px;
      background: #555;

    }
  }
`;

export const SwitchInput = styled.input`
  ${Switch}
  position: absolute;
  width: 75px;
  height: 35px;
  opacity: 0;
  margin: 0;
  z-index: 999;
  cursor: pointer;
`;

export const SwitchCheckMark = styled.span`
  ${Switch}
  opacity: 0;
  margin: 0;
  position: absolute;
  z-index: 999;
  cursor: pointer;
`;

export const SwitchOverlay = styled.div`
  ${Switch}
  position: absolute;
  height: 30px;
  width: 30px;
  border-radius: 40%;
  left: 3px;
  transition: all 0.25s linear;
  z-index: 998;
  background: rgba( 182, 190, 190, 0.70 );
  box-shadow: inset 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Checkmark = styled.svg`
  width: 40px;
  height: 40px;

  & svg
    {
      max-width: 25px;
      max-height: 25px;
      fill: #55D6FF;
    }
`;


