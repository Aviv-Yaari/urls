import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
   ${reset}
   * {
       box-sizing: border-box;
   }
   body {
       font-family: 'Open Sans', sans-serif;
       color: ${props => props.theme.colors.textBody};
       font-size: ${props => props.theme.font.size};
   }
   h1,h2,h3,h4,h5,h6 {
       color: ${props => props.theme.colors.textHeading};
       font-weight: 700;
   }
`;

export default GlobalStyle;
