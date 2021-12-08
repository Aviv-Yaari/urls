import styled from 'styled-components';
import breakpoints from './general/breakpoints';

const StyledLabelPreview = styled.section`
  display: flex;
  gap: 10px;
  align-items: stretch;
  flex-direction: column;
  @media (min-width: ${breakpoints.mobile}) {
    align-items: center;
    flex-direction: row;
  }
  > :first-child {
    word-break: break-all;
    @media (min-width: ${breakpoints.mobile}) {
      width: 150px;
    }
  }
`;

export default StyledLabelPreview;
