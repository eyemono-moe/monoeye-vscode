import type { EditorColorGenerator } from "../../types/editorColors";
import { opacity } from "../opacity";

export const terminal: EditorColorGenerator = (palette) => {
  return {
    terminal: {
      foreground: palette.fgMain,
      ansiBlack: palette.bgDarker,
      ansiBlue: palette.blue,
      ansiCyan: palette.cyan,
      ansiGreen: palette.green,
      ansiMagenta: palette.purple,
      ansiRed: palette.red,
      ansiWhite: palette.fgSub,
      ansiYellow: palette.yellow,
      ansiBrightBlack: palette.bgDark,
      ansiBrightBlue: palette.blue,
      ansiBrightCyan: palette.cyan,
      ansiBrightGreen: palette.green,
      ansiBrightMagenta: palette.purple,
      ansiBrightRed: palette.red,
      ansiBrightWhite: palette.fgMain,
      ansiBrightYellow: palette.yellow,
    },
    terminalCommandDecoration: {
      defaultBackground: palette.bgMain,
      errorBackground: palette.orange,
      successBackground: palette.green,
    },
    terminalOverviewRuler: {
      cursorForeground: `${palette.fgMain}${opacity.opacityLow}`,
    },
  };
};
