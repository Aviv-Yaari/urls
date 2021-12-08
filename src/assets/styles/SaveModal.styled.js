import styled from 'styled-components';
import { ModalContent } from './shared/Modal.styled';

const StyledSaveModal = styled(ModalContent)`
  min-width: 280px;
  max-width: 450px;
  min-height: 300px;
  border-radius: 10px;

  h2 {
    margin-top: 0;
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }
`;

export const Entry = styled.p`
  margin: 10px 0;
  span {
    font-weight: 700;
    color: ${props => props.theme.colors.primary2};
  }
`;

export default StyledSaveModal;
