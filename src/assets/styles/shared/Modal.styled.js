import styled from 'styled-components';
import IconButton from './IconButton.styled';

export const Modal = styled.section`
  position: fixed;
  inset: 0;
  display: grid;
  place-content: center;
  background: rgba(0, 0, 0, 0.85);
  z-index: 100;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
`;

export const ModalCloseButton = styled(IconButton)`
  position: absolute;
  top: 15px;
  right: 15px;
`;
