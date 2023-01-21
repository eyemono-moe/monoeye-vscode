import type { EditorColorGenerator } from "../../types/editorColors";

export const titleBar: EditorColorGenerator = (palette) => {
  return {
    titleBar: {
      activeBackground: palette.bgDarker,
      activeForeground: palette.fgSub,
      inactiveBackground: palette.bgDark,
      inactiveForeground: palette.fgShadow,
    },
  };
};
