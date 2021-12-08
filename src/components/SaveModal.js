import { useSelector } from 'react-redux';
import StyledSaveModal, { Entry } from '../assets/styles/SaveModal.styled';
import { Modal, ModalCloseButton } from '../assets/styles/shared/Modal.styled';
import { ReactComponent as IconClose } from '../assets/images/icon-close.svg';

function SaveModal({ onClose }) {
  const data = useSelector(state => state.url.data);

  const handleClick = ev => {
    ev.stopPropagation();
  };

  return (
    <Modal onClick={onClose}>
      <StyledSaveModal onClick={handleClick}>
        <ModalCloseButton onClick={onClose}>
          <IconClose fill="#fff" width={40} height={40} />
        </ModalCloseButton>
        <h2>Saved Data</h2>
        <h3>Your blocked URLs are:</h3>
        {Object.entries(data).map(entry => (
          <Entry key={entry[0]}>
            <span>{entry[0]}: </span>
            {entry[1].join(', ')}
          </Entry>
        ))}
      </StyledSaveModal>
    </Modal>
  );
}

export default SaveModal;
