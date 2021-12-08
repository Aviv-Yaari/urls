import StyledUrlAdd, { InputError, InputWrapper, SelectWrapper } from '../assets/styles/UrlAdd.styled';
import Select from 'react-select';
import Button from '../assets/styles/shared/Button.styled';
import Input from '../assets/styles/shared/Input.styled';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/urlSlice';
import { useState } from 'react';

function UrlAdd() {
  const options = useSelector(state => state.url.options);
  const [fields, setFields] = useState({ url: '', type: options[0] });
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleChange = ev => {
    const { name, value } = ev.target;
    setFields(fields => ({ ...fields, [name]: value }));
  };

  const handleSelectChange = type => {
    setFields(fields => ({ ...fields, type }));
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    const { url, type } = fields;
    if (fields.url.charAt(0) !== '/') {
      return setError("URLs must start with '/'");
    }
    setError(null);
    dispatch(add({ url, type: type.value }));
  };

  return (
    <StyledUrlAdd onSubmit={handleSubmit}>
      <SelectWrapper>
        <Select name="type" options={options} onChange={handleSelectChange} value={fields.type} />
      </SelectWrapper>
      <InputWrapper>
        <Input isError={!!error} name="url" placeholder="e.g. /index.php" onChange={handleChange} value={fields.url} />
        {error && <InputError>{error}</InputError>}
      </InputWrapper>
      <Button>Add</Button>
    </StyledUrlAdd>
  );
}

export default UrlAdd;
