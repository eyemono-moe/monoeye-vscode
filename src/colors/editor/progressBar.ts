import type { EditorColorGenerator } from "../../types/editorColors";

export const progressBar: EditorColorGenerator = (palette) => {
  return { progressBar: { background: palette.green } };
};
