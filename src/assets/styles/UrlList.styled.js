import styled from 'styled-components';

const StyledUrlList = styled.ul`
  min-height: 100px;
  padding: 5px;
  border: 1px solid ${props => props.theme.colors.borderHover};
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-grow: 1;
  gap: 10px;
  max-width: 600px;
`;
export default StyledUrlList;
