import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
      --primary-color: #007bff;
      --white: #ffffff;
      --black: #193b61;
      --primary-button: #193b61;
      --background-primary: conic-gradient(from -360deg at 100% 113.89%, #0068e1 -31.88deg, #86C0F6 328.12deg, #193b61 371.25deg);
      --linkedin-hex: #0e76a8;
      --facebook-hex: #4267B2;
      --instagram-hex: #fccc63;
      --primary-accent: #193b61;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'lato';
  }

  html, body {
    margin: 0;   
    padding: 0;  
  }




`;


export default GlobalStyle;