import { useSelector } from 'react-redux';
import StyledLabelList from '../assets/styles/LabelList.styled';
import LabelPreview from './LabelPreview';

function LabelList() {
  const data = useSelector(state => state.url.data);
  const options = useSelector(state => state.url.options);

  if (!Object.keys(data).length || !options) return <div></div>;
  return (
    <StyledLabelList>
      {Object.keys(data).map(type => (
        <LabelPreview
          key={type}
          type={options.find(option => option.value === type)} // find the text definition for type
          urls={data[type]}
        />
      ))}
    </StyledLabelList>
  );
}

export default LabelList;
