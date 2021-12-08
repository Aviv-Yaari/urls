import styled from 'styled-components';

const StyledUrlPreview = styled.div`
  display: flex;
  gap: 4px;
  background: ${props => props.theme.colors.background};
  padding: 5px 10px;
  border: 1px solid ${props => props.theme.colors.border};
`;
export default StyledUrlPreview;
