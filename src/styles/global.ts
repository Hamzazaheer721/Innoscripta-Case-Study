import { createGlobalStyle } from "styled-components";
import { device } from "./devices";

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
    font-weight: 400
  }
  
  .ant-carousel .slick-prev, 
  .ant-carousel .slick-next {
    color: #548798;
    z-index: 1; /* Ensure arrows are above other elements */
    font-size: 2.4rem; 
  }

  /* Change the background color of the dots */
  .ant-carousel .slick-dots li button {
    background: #548798;
  }

  /* Change the background color of the active dot */
  .ant-carousel .slick-dots li.slick-active button {
    background: #548798;
  }

  @media ${device.tabletAndBelow} {
     .ant-carousel .slick-dots-bottom {
      display: none !important;
     }
  }
  
  &::-webkit-scrollbar {
      width: 1rem;
      height: 1rem;
      color: transparent;
  }
  
  &::-webkit-scrollbar-track {
      background: transparent;
  }

  &::-webkit-scrollbar-thumb {
      background: #757575; 
      border-radius: 1.2rem;

  }
  
`;
