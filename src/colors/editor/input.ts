import type { EditorColorGenerator } from "../../types/editorColors";

export const input: EditorColorGenerator = (palette) => {
  return { input: { background: palette.bgMain } };
};
