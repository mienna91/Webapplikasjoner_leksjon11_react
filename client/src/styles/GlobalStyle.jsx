import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0 auto;
        min-height: 100%;
        font-family: ${(props) => props.theme.fonts[1]}
    }
`;

export default GlobalStyle;
