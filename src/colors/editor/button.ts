import type { EditorColorGenerator } from "../../types/editorColors";

export const button: EditorColorGenerator = (palette) => {
  return {
    button: {
      background: palette.bgLight,
      foreground: palette.fgShadow,
      secondaryBackground: palette.bgLight,
      secondaryForeground: palette.fgShadow,
    },
  };
};
