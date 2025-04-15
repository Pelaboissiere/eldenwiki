import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    background-color: #0e0e0e; /* cor que continuará o fundo abaixo da imagem */
    background-image: url('https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/23324816/elden_1.png?quality=90&strip=all&crop=7.8125%2C0%2C84.375%2C100&w=2400');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    color: #fff; 
    font-family: 'Poppins', sans-serif;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyles;
