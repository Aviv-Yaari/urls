import StyledUrlAdd, { InputError, InputWrapper, SelectWrapper, StyledButton } from '../assets/styles/UrlAdd.styled';
import Select from 'react-select';
import Input from '../assets/styles/shared/Input.styled';
import { useDispatch, useSelector } from 'react-redux';
import { add, selectOption } from '../store/urlSlice';
import { useState } from 'react';

function UrlAdd() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState(null);
  const currentOption = useSelector(state => state.url.currentOption);
  const options = useSelector(state => state.url.options);
  const dispatch = useDispatch();

  const handleChange = ev => {
    setUrl(ev.target.value);
  };

  const handleSelectChange = option => {
    dispatch(selectOption({ option }));
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    if (url.charAt(0) !== '/') {
      return setError("URLs must start with '/'");
    }
    setError(null);
    setUrl('');
    dispatch(add({ url }));
  };

  return (
    <StyledUrlAdd onSubmit={handleSubmit}>
      <SelectWrapper>
        <Select options={options} onChange={handleSelectChange} value={currentOption} />
      </SelectWrapper>
      <InputWrapper>
        <Input isError={!!error} placeholder="e.g. /index.php" onChange={handleChange} value={url} />
        {error && <InputError>{error}</InputError>}
      </InputWrapper>
      <StyledButton>Add</StyledButton>
    </StyledUrlAdd>
  );
}

export default UrlAdd;
