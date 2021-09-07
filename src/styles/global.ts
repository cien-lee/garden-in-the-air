import { css } from 'linaria';

export const globalStyle = css`
  :global() {
    * {
      margin: 0;
      padding: 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border: 0;
      font-family: system-ui, 'AppleSDGothicNeo', sans-serif;
      font-style: normal;
      word-wrap: break-word;
      word-break: keep-all;
      -webkit-hyphens: auto;
      -ms-hyphens: auto;
      hyphens: auto;
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      -webkit-tap-highlight-color: transparent;
    }
    *:focus {
      outline: none;
    }

    html,
    body {
      width: 100%;
      height: 100%;
      -ms-user-select: none;
      -moz-user-select: -moz-none;
      -webkit-user-select: none;
      user-select: none;
    }

    body {
      line-height: 1;
      height: 100%;
    }

    ol,
    ul {
      list-style: none;
    }

    button {
      background: none;
      border: none;
    }

    a {
      text-decoration: none;
    }

    .blind {
      overflow: hidden;
      position: absolute;
      border: 0;
      width: 1px;
      height: 1px;
      clip: rect(1px, 1px, 1px, 1px);
    }

    img {
      width: 100%;
      vertical-align: top;
    } 
  }
`;
