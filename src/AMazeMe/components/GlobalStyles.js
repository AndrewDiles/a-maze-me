import { createGlobalStyle } from "styled-components";
import Varela from "../Varela_Round/VarelaRound-Regular.ttf";

const GlobalStyles = createGlobalStyle`
@font-face {
	font-family: Varela_Round;
	src: url(${Varela}) format("truetype");
}
html {
    --color-text: #e0fdf5;
    --color-bg: #0f0961;
    --color-h: #38fff9;
		--color-f: #00FF00; // lime
		--color-a: #078aff;
		--color-border: #900779;
		--color-accent: #FF00FF; // magenta

  }
  body {
    margin: 0;
    padding: 0;
		font-size:1.5rem;
  }
	*, *::after, *::before {
		font-family: 'Varela_Round';
		color: var(--color-text);
	}
	body, div, section, main, button, input {
		background-color: var(--color-bg);
	}
	input, select {
		position: relative;
  	font-size: 1.25rem;
  	padding: 0.25em .5em;
  	border-color: var(--color-border);
		background-color: var(--color-text);
		border-width: 0.2em;
		color: var(--color-bg);
  	border-radius: 1em;
		border-style: double;
  	&:focus {
  	  color: var(--color-border);
  	  outline-color: var(--color-f);
  	}
  	&:hover {
  	  color: var(--color-border);
  	  cursor: pointer;
			border-color: var(--color-h);
  	}
		&:active {
  	  color: var(--color-a);
			border-style: solid;
  	}
	}
	input[type="color"]{
		background-color: buttonface;
		padding: 0;
		border-radius: 0;
		width: 80%;
		min-height: 80%;
		margin-bottom: 1em;
	}

	/* thank you: https://www.w3schools.blog/text-unselectable-css */
	.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}

/* @keyframes rotate {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
} */


`;

export default GlobalStyles;
