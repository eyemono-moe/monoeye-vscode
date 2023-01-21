import type { EditorColorGenerator } from "../../types/editorColors";

export const welcome: EditorColorGenerator = (palette) => {
  return {
    welcomePage: { tileBorder: palette.fgShadow },
  };
};
