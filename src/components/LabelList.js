import { useSelector } from 'react-redux';
import StyledLabelList from '../assets/styles/LabelList.styled';
import LabelPreview from './LabelPreview';

function LabelList({ currentType }) {
  const data = useSelector(state => state.url.data);
  const options = useSelector(state => state.url.options);

  return (
    <StyledLabelList>
      {Object.keys(data)?.map(type => (
        <LabelPreview
          key={type}
          type={options.find(option => option.value === type)} // find the text definition for type
          urls={data[type]}
        />
      ))}
      {!Object.keys(data)?.find(type => type === currentType.value) && (
        <LabelPreview
          type={currentType} // find the text definition for type
          urls={data[currentType]}
        />
      )}
    </StyledLabelList>
  );
}

export default LabelList;
