import type { EditorColorGenerator } from "../../types/editorColors";

export const dropdown: EditorColorGenerator = (palette) => {
  return {
    dropdown: { background: palette.bgMain, foreground: palette.fgSub },
  };
};
