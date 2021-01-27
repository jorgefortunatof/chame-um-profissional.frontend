import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
 	background-color: ${colors.light};
}

a {
  color: inherit;
  text-decoration: none;
}

a, button {
  cursor: pointer;
}
`;

export default GlobalStyle;
