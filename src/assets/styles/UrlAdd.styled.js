import styled from 'styled-components';
import breakpoints from './general/breakpoints';
import Button from './shared/Button.styled';

const StyledUrlAdd = styled.form`
  display: flex;
  align-items: stretch;
  gap: 20px;
  flex-direction: column;

  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
  }

  label {
    font-weight: 500;
  }
  input {
    width: 100%;
  }
`;

export const SelectWrapper = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    flex-basis: 250px;
  }
`;

export const InputWrapper = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    flex-basis: 450px;
  }
  position: relative;
`;

export const InputError = styled.span`
  position: absolute;
  left: 0;
  bottom: -20px;
  font-size: 0.9em;
  color: #e70000;
`;

export const StyledButton = styled(Button)`
  margin-left: auto;
`;

export default StyledUrlAdd;
