import type { EditorColorGenerator } from "../../types/editorColors";

export const button: EditorColorGenerator = (palette) => {
  return {
    button: {
      background: palette.purple,
      foreground: palette.bgDarker,
      secondaryBackground: palette.fgShadow,
      secondaryForeground: palette.bgDarker,
    },
  };
};
