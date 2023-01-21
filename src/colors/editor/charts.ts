import type { EditorColorGenerator } from "../../types/editorColors";

export const charts: EditorColorGenerator = (palette) => {
  return {
    charts: {
      green: palette.green,
      purple: palette.purple,
    },
  };
};
