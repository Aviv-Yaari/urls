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
       line-height: 1.5;
   }
   h1,h2,h3,h4,h5,h6 {
       color: ${props => props.theme.colors.textHeading};
       font-weight: 700;
       margin: 10px 0;
   }
   h2 {
       font-size: 2em;
   }
`;

export default GlobalStyle;
