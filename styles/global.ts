import { css } from "@emotion/react";

export const global = css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: 0;
    font-family: "Noto Sans CJK KR", sans-serif;
    outline: unset;
    list-style: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    user-select: none;
    -webkit-touch-callout: none;
    font-style: normal;
  }
  body {
    background-color: #fff1e3;
  }
  button,
  label {
    cursor: pointer;
    background-color: transparent;
  }
  blockquote,
  q {
    quotes: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
