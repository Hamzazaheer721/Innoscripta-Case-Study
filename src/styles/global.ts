import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    /* Box sizing property is not inherited by itself, so by using this, we inherit it */
  }

  html {
    font-size: 62.5%; /*  1 rem = 10 px */
  }

  body {
    font-family: sans-serif;
    box-sizing: border-box; 
    line-height: 1.7;
    font-weight: 400;
  }
`;
