import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 :root {
    --background: #f8f2f5;
    --green: #33cc95;
    --red: #E52E4D;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969CB3;
    --shape: #FFFF;
 } 

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    -webkit-font-smooth: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  
`;

export default GlobalStyles;
