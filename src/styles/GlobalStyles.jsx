import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";

const style = css`
  ${emotionReset}

  * {
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    box-sizing: border-box;
    color: #191f28;
  }

  html {
    font-size: 16px;
  }

  select,
  input,
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }
`;

const GlobalStyles = () => {
  return <Global styles={style} />;
};

export default GlobalStyles;
