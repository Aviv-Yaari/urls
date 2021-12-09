import { useSelector } from 'react-redux';
import StyledLabelList from '../assets/styles/LabelList.styled';
import LabelPreview from './LabelPreview';

function LabelList() {
  const data = useSelector(state => state.url.data);
  const options = useSelector(state => state.url.options);
  const currentOption = useSelector(state => state.url.currentOption);

  return (
    <StyledLabelList>
      {Object.keys(data)?.map(type => (
        <LabelPreview
          key={type}
          type={options.find(option => option.value === type)} // find the text definition for type
          urls={data[type]}
        />
      ))}
      {!Object.keys(data)?.find(type => type === currentOption.value) && (
        <LabelPreview type={currentOption} urls={data[currentOption]} />
      )}
    </StyledLabelList>
  );
}

export default LabelList;
