import type { EditorColorGenerator } from "../../types/editorColors";

export const toolbar: EditorColorGenerator = (palette) => {
  return { toolbar: { hoverBackground: palette.bgLight } };
};
