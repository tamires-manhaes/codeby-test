import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, * {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  #root {
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    --font-medium: 500;
    --font-bold: 800;
    --border-color: #a9a9a9;
    --listPrice-color: #a5a6b3;
    --button-bg-color: #3b74f2;
    --tag-bg: #c7ffa6;
    --tag-textColor: #247a00;

    li {
      list-style: none;
      
    }

    a {
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
