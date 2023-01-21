import type { EditorColorGenerator } from "../../types/editorColors";

export const icon: EditorColorGenerator = (palette) => {
  return { icon: { foreground: palette.fgSub } };
};
