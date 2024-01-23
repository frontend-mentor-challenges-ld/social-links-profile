import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    // Colors 

    // Fonts

    // Other 

    // Breakpoints
  }

  *, 
  *::before,
  *::after {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    /* font-size: 1.6rem;
    font-family: var(--outfit);
    line-height: 1.5; */
  }

  a {
    text-decoration: none;
  }

`;

export default GlobalStyles;
