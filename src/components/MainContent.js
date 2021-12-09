import StyledMainContent from '../assets/styles/MainContent.styled';
import UrlAdd from './UrlAdd';
import LabelList from './LabelList';
import { useState } from 'react';
import Button from '../assets/styles/shared/Button.styled';
import SaveModal from './SaveModal';

function MainContent() {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      {isModal && <SaveModal onClose={() => setIsModal(false)} />}
      <StyledMainContent>
        <label>Block URLs</label>
        <div>
          <UrlAdd />
          <LabelList />
          <Button onClick={() => setIsModal(true)}>Save</Button>
        </div>
      </StyledMainContent>
    </>
  );
}

export default MainContent;
