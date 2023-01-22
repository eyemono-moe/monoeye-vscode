import type { EditorColorGenerator } from "../../types/editorColors";

export const errorForeground: EditorColorGenerator = (palette) => {
  return { errorForeground: palette.orange };
};
