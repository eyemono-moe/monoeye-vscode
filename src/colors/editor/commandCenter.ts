import type { EditorColorGenerator } from "../../types/editorColors";

export const commandCenter: EditorColorGenerator = (palette) => {
  return {
    commandCenter: {
      activeBackground: palette.bgLight,
      background: palette.bgMain,
    },
  };
};
