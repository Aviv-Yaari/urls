import StyledUrlList from '../assets/styles/UrlList.styled';
import UrlPreview from './UrlPreview.js';

function UrlList({ urls, onRemove }) {
  return (
    <StyledUrlList>
      {urls?.map((url, idx) => (
        <UrlPreview key={url} url={url} idx={idx} onRemove={onRemove} />
      ))}
    </StyledUrlList>
  );
}

export default UrlList;
