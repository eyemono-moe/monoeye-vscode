import type { EditorColorGenerator } from "../../types/editorColors";

export const walkthrough: EditorColorGenerator = (palette) => {
  return { walkthrough: { stepTitle: { foreground: palette.fgSub } } };
};
