import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  background-color: #f0f0f0;
}
`;
