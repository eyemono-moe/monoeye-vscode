import type { EditorColorGenerator } from "../../types/editorColors";

export const inputOption: EditorColorGenerator = (palette) => {
  return {
    inputOption: {
      activeBorder: palette.fgSub,
      activeForeground: palette.bgMain,
      hoverBackground: palette.bgMain,
    },
  };
};
