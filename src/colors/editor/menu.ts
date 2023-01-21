import type { EditorColorGenerator } from "../../types/editorColors";

export const menu: EditorColorGenerator = (palette) => {
  return { menu: { separatorBackground: palette.bgLight } };
};
