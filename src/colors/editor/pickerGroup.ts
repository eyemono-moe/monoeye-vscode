import type { EditorColorGenerator } from "../../types/editorColors";

export const pickerGroup: EditorColorGenerator = (palette) => {
  return {
    pickerGroup: { border: palette.fgShadow, foreground: palette.fgSub },
  };
};
