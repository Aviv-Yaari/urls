import IconButton from '../assets/styles/shared/IconButton.styled';
import StyledUrlPreview from '../assets/styles/UrlPreview.styled';
import { ReactComponent as IconClose } from '../assets/images/icon-close.svg';

function UrlPreview({ url, onRemove }) {
  return (
    <StyledUrlPreview>
      <span>{url}</span>
      <IconButton onClick={() => onRemove(url)}>
        <IconClose width={15} height={15} />
      </IconButton>
    </StyledUrlPreview>
  );
}

export default UrlPreview;
