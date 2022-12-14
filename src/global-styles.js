import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --main-red: #e50914;
        --hover-red: #f40612;
        --error-color: #e87c03;
    }

    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        --webkit-font-smoothing: antialiased;
        --moz-osk-font-smoothing: grayscale;
        background-color: black;
        color: #333333;
        font-size: 16px;
    }
`;
