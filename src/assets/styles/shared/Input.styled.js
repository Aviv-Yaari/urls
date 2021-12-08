import styled, { css } from 'styled-components';

const Input = styled.input`
  outline: none;
  border: 1px solid ${props => (props.isError ? 'red' : props.theme.colors.border)};
  font-family: inherit;
  padding: 8px;
  border-radius: 4px;
  transition: all 100ms;

  ${props =>
    !props.isError &&
    css`
      &:hover {
        border-color: ${props => props.theme.colors.borderHover};
      }

      &:focus {
        border-color: ${props => props.theme.colors.primary};
        box-shadow: 0 0 0 1px ${props => props.theme.colors.primary};
      }
    `}
`;

export default Input;
