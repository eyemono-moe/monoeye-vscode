import type { EditorColorGenerator } from "../../types/editorColors";

export const foreground: EditorColorGenerator = (palette) => {
  return { foreground: palette.fgSub };
};
