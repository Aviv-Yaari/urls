import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/general/GlobalStyle.styled';
import theme from './assets/styles/general/theme';
import MainContainer from './assets/styles/MainContainer.styled';
import MainContent from './components/MainContent';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainContainer>
          <MainContent />
        </MainContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
