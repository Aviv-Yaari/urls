import StyledUrlList from '../assets/styles/UrlList.styled';
import UrlPreview from './UrlPreview.js';

function UrlList({ urls, onRemove }) {
  if (!urls) return <div></div>;
  return (
    <StyledUrlList>
      {urls.map(url => (
        <UrlPreview key={url} url={url} onRemove={onRemove} />
      ))}
    </StyledUrlList>
  );
}

export default UrlList;
