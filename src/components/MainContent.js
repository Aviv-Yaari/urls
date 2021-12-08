import StyledMainContent from '../assets/styles/MainContent.styled';
import UrlAdd from './UrlAdd';
import LabelList from './LabelList';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../assets/styles/shared/Button.styled';
import SaveModal from './SaveModal';

function MainContent() {
  const options = useSelector(state => state.url.options);
  const [type, setType] = useState(options[0]);
  const [isModal, setIsModal] = useState(false);

  const handleSelectChange = type => {
    setType(type);
  };

  return (
    <>
      {isModal && <SaveModal onClose={() => setIsModal(false)} />}
      <StyledMainContent>
        <label>Block URLs</label>
        <div>
          <UrlAdd type={type} options={options} onSelectChange={handleSelectChange} />
          <LabelList currentType={type} />
          <Button onClick={() => setIsModal(true)}>Save</Button>
        </div>
      </StyledMainContent>
    </>
  );
}

export default MainContent;
