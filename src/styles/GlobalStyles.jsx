import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    body {
			background-color: #495057;
			margin: 0;
			padding: 0;
			height: 100vh;
			color: white;
			font-family: sans-serif;
        
        & h1, h2, h3, ul, p {
					margin: 0;
					padding: 0;
        }
    }
`;