import styled from 'styled-components';

const StyledMainContent = styled.main`
  padding: 20px;
  background: #fff;
  width: 100vw;
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;

  > label {
    margin-top: 12px;
    font-weight: 700;
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    flex-basis: 820px;
    gap: 30px;
  }
`;

export default StyledMainContent;
