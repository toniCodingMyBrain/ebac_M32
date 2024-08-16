import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 32px;
        list-style: none;
        text-decoration: none;
    }
    
    .App {
        background-color: #f5f5f5;
        overflow: scroll;
        height: 100vh;
    }
`;
