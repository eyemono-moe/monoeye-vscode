import type { EditorColorGenerator } from "../../types/editorColors";

export const badge: EditorColorGenerator = (palette) => {
  return {
    badge: {
      background: palette.purple,
      foreground: palette.bgDarker,
    },
  };
};
