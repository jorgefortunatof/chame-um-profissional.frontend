import { createGlobalStyle } from 'styled-components';

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
