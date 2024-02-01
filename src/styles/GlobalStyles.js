import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    // Colors 
    --green: hsl(75, 94%, 57%);
    --white: hsl(0, 0%, 100%);
    --grey: hsl(0, 0%, 20%);
    --dark-grey: hsl(0, 0%, 12%);
    --off-black: hsl(0, 0%, 8%);

    // Fonts
    --inter: 'Inter', sans-serif;

    --fw-400: 400;
    --fw-600: 600;
    --fw-700: 700;

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
    font-size: 1.4rem;
    font-family: var(--inter);
    line-height: 1.5;
    background-color: var(--off-black);
  }

  a {
    text-decoration: none;
  }

`;

export default GlobalStyles;
