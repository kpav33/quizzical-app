import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
      --background: #F5F7FB;
      --text: #293264;
      --buttonBackground: #4D5B9E;
      --buttonText: #F5F7FB;
      --answerSelected: #D6DBF5;
      --answerCorrect: #94D7A2;
      --answerWrong: #F8BCBC;
  }

  *, 
  *:before, 
  *:after {
    box-sizing: border-box;
  }

  html {
    max-width: 1920px;
    margin: 0 auto;
  }

  html, 
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    // font-family: 'Karla', sans-serif; For Quizzical title
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: var(--text);
    font-size: 16px;
  }
`;
