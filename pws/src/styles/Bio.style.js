import styled from "styled-components";
import colors from '../styles/Colors';

export const StyleBio = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  background-color: var(--var-white);
`

export const StyleBioTitle = styled.h1`
  font-size: 84px;
`

export const StyleBioHook = styled.a`
  text-decoration: none;
  color: ${colors.greenchristi};
  transition: all 0.25s linear;
`
