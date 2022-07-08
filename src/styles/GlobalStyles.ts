import { shade, tint } from 'polished'
import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
${({ theme: { colors } }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${colors['green-500']};
  }

  html {
    font-size: 100%;
  }

  body {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${colors.background};
    color: ${colors.white};
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem 'Roboto', sans-serif, -apple-system;
    line-height: 1.25;
    border: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 700;
  }

  a {
    text-decoration: none;
    background: none;
    font-weight: 700;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
    color: inherit;
    color: ${colors.orange};
    :hover {
      color: ${tint(0.16, colors.orange)};
      text-decoration: underline;
    }
    :active {
      color: ${shade(0.16, colors.orange)};
      text-decoration: underline;
    }
  }

  button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }
`}
`
