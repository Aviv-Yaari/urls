import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.theme.colors.primary2};
  padding: 10px 25px;
  border: none;
  color: #fff;
  font-family: inherit;
  font-weight: 700;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.primary};
  }
`;

export default Button;
