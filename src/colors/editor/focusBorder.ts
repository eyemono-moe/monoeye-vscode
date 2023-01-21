import type { EditorColorGenerator } from "../../types/editorColors";

export const focusBorder: EditorColorGenerator = (palette) => {
  return { focusBorder: palette.purple };
};
