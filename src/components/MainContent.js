import StyledMainContent from '../assets/styles/MainContent.styled';
import UrlAdd from './UrlAdd';
import LabelList from './LabelList';

function MainContent() {
  return (
    <StyledMainContent>
      <label>Block URLs</label>
      <div>
        <UrlAdd />
        <LabelList />
      </div>
    </StyledMainContent>
  );
}

export default MainContent;
