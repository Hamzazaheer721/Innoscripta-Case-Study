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
`;
