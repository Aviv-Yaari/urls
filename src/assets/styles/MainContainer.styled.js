import styled from 'styled-components';

const MainContainer = styled.div`
  display: grid;
  place-content: center;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`;

export default MainContainer;
