import type { EditorColorGenerator } from "../../types/editorColors";

export const settings: EditorColorGenerator = (palette) => {
  return {
    settings: {
      headerForeground: palette.fgSub,
      modifiedItemIndicator: palette.purple,
    },
  };
};
