import type { EditorColorGenerator } from "../../types/editorColors";

export const inputValidation: EditorColorGenerator = (palette) => {
  return {
    inputValidation: {
      errorBackground: palette.bgLight,
      errorBorder: palette.orange,
      infoBackground: palette.bgLight,
      infoBorder: palette.blue,
      warningBackground: palette.bgLight,
      warningBorder: palette.yellow,
    },
  };
};
