import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`;

export default MainContainer;
