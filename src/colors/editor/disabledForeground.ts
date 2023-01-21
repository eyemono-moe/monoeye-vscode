import type { EditorColorGenerator } from "../../types/editorColors";

export const disabledForeground: EditorColorGenerator = (palette) => {
  return { disabledForeground: palette.fgShadow };
};
