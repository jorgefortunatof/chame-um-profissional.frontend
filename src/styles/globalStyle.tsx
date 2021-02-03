import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  padding: 0;
}

html,
body {
  padding: 0;
  margin: 0;
 	background-color: ${colors.light};
}

a {
  color: inherit;
  text-decoration: none;
}

a, button {
  cursor: pointer;
}

h1 { 
  font-size: 26px;
}
`;

export default GlobalStyle;
