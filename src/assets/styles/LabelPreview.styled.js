import styled from 'styled-components';

const StyledLabelPreview = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;
  > :first-child {
    width: 100px;
    word-break: break-all;
  }
`;

export default StyledLabelPreview;
