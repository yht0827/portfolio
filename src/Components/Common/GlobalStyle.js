import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset};

    @font-face {
            font-family: "NanumSquareRound";
            src:url('/fonts/NanumSquareRoundR.eot');
            src:url('/fonts/NanumSquareRoundR.eot#iefix') format('embedded-opentype'),
            url('/fonts/NanumSquareRoundR.woff') format('woff'),
            url('/fonts/NanumSquareRoundR.ttf') format('truetype');
    }
    
    * {
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
    }

    html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 18px;
    }

    div {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: -moz-none;
    -ms-user-select: none;
    user-select: none;
    }
`;

export default GlobalStyle;
