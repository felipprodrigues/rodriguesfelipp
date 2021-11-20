import styled from 'styled-components';
import Inputs from './Inputs.style';

export const HeaderEl = styled.header`
  display: flex;
  background-color: var(--var-darkest);
  color: var(--var-white);
`;

export const HeaderCheckbox = styled.label`
  width: 75px;
  height: 35px;
  cursor: pointer;
  position: absolute;
  right: 1.5em;
  top: 0.7em;
`;

export const HeaderTitleFrame = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HeaderFrame = styled(HeaderTitleFrame)`
  align-items: center;
  max-width: 100%;
  padding: 50px;
  width: 20%;
  margin-left: 50px;
`;

export const HeaderTitle = styled(HeaderTitleFrame)`
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  padding-bottom: 50px;

  /* @media screen and (max-width: $web-up) {
    align-items: center;
    font-size: 22px;
  } */
`;

// IMAGE
export const HeaderImage = styled.img`
  min-width: 200px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid var(--var-pic-border);
  position: relative;
  top: 150px;
`;

export const HeaderName = styled.h1`
  // @media screen and (max-width: $web-up) {
  //   font-size: 24px;
  // }
`

export const HeaderSubtitle = styled.span`
  color: var(--var-head-subtitle);
`
