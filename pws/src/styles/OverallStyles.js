import styled from 'styled-components';

export const HeaderEl = styled.header`
  display: flex;
  background-color: var(--var-darkest);
  color: var(--var-white);

  &__title,
  &__frame {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
