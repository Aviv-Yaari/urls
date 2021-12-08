import StyledUrlAdd, { InputError, InputWrapper, SelectWrapper, StyledButton } from '../assets/styles/UrlAdd.styled';
import Select from 'react-select';
import Input from '../assets/styles/shared/Input.styled';
import { useDispatch } from 'react-redux';
import { add } from '../store/urlSlice';
import { useState } from 'react';

function UrlAdd({ type, options, onSelectChange }) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleChange = ev => {
    setUrl(ev.target.value);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    if (url.charAt(0) !== '/') {
      return setError("URLs must start with '/'");
    }
    setError(null);
    setUrl('');
    dispatch(add({ url, type: type.value }));
  };

  return (
    <StyledUrlAdd onSubmit={handleSubmit}>
      <SelectWrapper>
        <Select name="type" options={options} onChange={onSelectChange} value={type} />
      </SelectWrapper>
      <InputWrapper>
        <Input isError={!!error} name="url" placeholder="e.g. /index.php" onChange={handleChange} value={url} />
        {error && <InputError>{error}</InputError>}
      </InputWrapper>
      <StyledButton>Add</StyledButton>
    </StyledUrlAdd>
  );
}

export default UrlAdd;
