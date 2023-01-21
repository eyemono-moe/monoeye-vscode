import type { EditorColorGenerator } from "../../types/editorColors";

export const scm: EditorColorGenerator = (palette) => {
  return { scm: { providerBorder: palette.fgShadow } };
};
