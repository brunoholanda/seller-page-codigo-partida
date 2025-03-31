import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    max-width: 1280px;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }

  a, button {
    color: ${({ theme }) => theme.primary};
  }
`;
