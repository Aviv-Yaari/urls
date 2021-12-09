import { useDispatch } from 'react-redux';
import StyledLabelPreview from '../assets/styles/LabelPreview.styled.js';
import { remove } from '../store/urlSlice.js';
import UrlList from './UrlList';

function LabelPreview({ type, urls }) {
  const dispatch = useDispatch();

  const handleRemoveUrl = idx => {
    dispatch(remove({ idx, type: type.value }));
  };

  return (
    <StyledLabelPreview>
      <span>{type.label || 'Unknown'}</span>
      <UrlList urls={urls} onRemove={handleRemoveUrl} />
    </StyledLabelPreview>
  );
}

export default LabelPreview;
