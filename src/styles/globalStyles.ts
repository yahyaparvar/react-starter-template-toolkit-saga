import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --text: #84868a;
  --font:"Inter", "Noto Sans Arabic";
  --persian-font:"Noto Sans Arabic";
  --border:#E2E8F0;
  --title:#0E172A;
  --background-secondary:rgb(248 250 252/1);
  --button:#007ACC;
  --button-text:#fff;
  --background-color:#fff;
}
.DARK {
    --text: #e5e7eb;
    --border: #374151;
    --title: #ffffff;
    --background-secondary: #1f2937;
    --background-color: #111827;
}
.DRACULA{
  --text: #f8f8f2;
  --border: #44475a;
  --title: #50fa7b;
  --background-secondary: #282a36;
  --button: #bd93f9;
  --button-text: #f8f8f2;
  --background-color: #282a36;
}
.SOLAR{
  --text: #657b83;
  --border: #93a1a1;
  --title: #268bd2;
  --background-secondary: #fdf6e3;
  --button: #cb4b16;
  --button-text: #fdf6e3;
  --background-color: #002b36;
}
.NORD{
  --text: #d8dee9;
  --border: #4c566a;
  --title: #81a1c1;
  --background-secondary: #2e3440;
  --button: #88c0d0;
  --button-text: #2e3440;
  --background-color: #3b4252;
}
.DISCORD{
  --text: #b9bbbe;
  --font: "Helvetica Neue", Helvetica, Arial, sans-serif;
  --border: #4f545c;
  --title: #7289da;
  --background-secondary: #36393f;
  --button: #7289da;
  --button-text: #ffffff;
  --background-color: #2f3136;
}
.MIDNIGHT{
  --text: #c3c3c3;
  --font: "Roboto", Arial, sans-serif;
  --border: #586069;
  --title: #99aab5;
  --background-secondary: #292b2f;
  --button: #00bcd4; /* Cyan accent color */
  --button-text: #ffffff;
  --background-color: #1e1e1e;
}
.LOCA{
  --text: #d8dee9;
  --font: "Roboto", Arial, sans-serif;
  --border: #a4acc4;
  --title: #ffcc00;
  --background-secondary: #3d4754;
  --button: #4caf50;
  --button-text: #ffffff;
  --background-color: #282c34;
}
.fa{
  --font:"Noto Sans Arabic" !important;
  direction:rtl ;
}
body,
html {
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: var(--background-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}
*{
  color: var(--text);
 box-sizing:border-box ;
 font-family : var(--font),sans-serif,system-ui, -apple-system,'Helvetica Neue';
}
`;
//COLUMN

export const ROW = css`
  display: flex;
  flex-direction: row;
`;
export const COLUMN = css`
  display: flex;
  flex-direction: column;
`;
const CENTER = css`
  align-items: center;
  justify-content: center;
`;
export const COLUMN_CENTER = css`
  ${CENTER}
  ${COLUMN}
`;
export const ROW_CENTER = css`
  ${CENTER}
  ${ROW}
`;
export const COLUMN_JUSTIFY_END__ALIGN_CENTER = css`
  ${COLUMN}
  justify-content: flex-end;
  align-items: center;
`;
export const COLUMN_JUSTIFY_START__ALIGN_CENTER = css`
  ${COLUMN}
  justify-content: flex-start;
  align-items: center;
`;
export const COLUMN_ALIGN_END__JUSTIFY_CENTER = css`
  ${COLUMN}
  justify-content: center;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_START__JUSTIFY_CENTER = css`
  ${COLUMN}
  justify-content: center;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_START__JUSTIFY_START = css`
  ${COLUMN}
  justify-content: flex-start;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_END__JUSTIFY_END = css`
  ${COLUMN}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_START__JUSTIFY_END = css`
  ${COLUMN}
  justify-content: flex-end;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_END__JUSTIFY_START = css`
  ${COLUMN}
  justify-content: flex-start;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_END__SPACE_B = css`
  ${COLUMN}
  justify-content:space-between;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_START__SPACE_B = css`
  ${COLUMN}
  justify-content:space-between;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_CENTER__SPACE_B = css`
  ${COLUMN}
  justify-content:space-between;
  align-items: center;
`;

// ROWS

export const ROW_JUSTIFY_END__ALIGN_CENTER = css`
  ${ROW}
  justify-content: flex-end;
  align-items: center;
`;
export const ROW_JUSTIFY_START__ALIGN_CENTER = css`
  ${ROW}
  justify-content: flex-start;
  align-items: center;
`;
export const ROW_ALIGN_END__JUSTIFY_CENTER = css`
  ${ROW}
  justify-content: center;
  align-items: flex-end;
`;
export const ROW_ALIGN_START__JUSTIFY_CENTER = css`
  ${ROW}
  justify-content: center;
  align-items: flex-start;
`;
export const ROW_ALIGN_START__JUSTIFY_START = css`
  ${ROW}
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ROW_ALIGN_END__JUSTIFY_END = css`
  ${ROW}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const ROW_ALIGN_START__JUSTIFY_END = css`
  ${ROW}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const ROW_ALIGN_END__JUSTIFY_START = css`
  ${ROW}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const ROW_ALIGN_END__SPACE_B = css`
  ${ROW}
  justify-content:space-between;
  align-items: flex-end;
`;
export const ROW_ALIGN_START__SPACE_B = css`
  ${ROW}
  justify-content:space-between;
  align-items: flex-start;
`;
export const ROW_ALIGN_CENTER__SPACE_B = css`
  ${ROW}
  justify-content:space-between;
  align-items: center;
`;
export const FULL_WIDTH = css`
  width: 100%;
`;
export const FULL_HEIGHT = css`
  height: 100%;
`;
export const UNSELECTABLE = css`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const BUTTON = css`
  ${UNSELECTABLE}
  border: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;

export default GlobalStyle;
