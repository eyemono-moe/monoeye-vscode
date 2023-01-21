import type { EditorColorGenerator } from "../../types/editorColors";

export const titleBar: EditorColorGenerator = (palette) => {
  return {
    titleBar: {
      activeBackground: palette.bgDark,
      activeForeground: palette.fgSub,
      inactiveBackground: palette.bgDarker,
      inactiveForeground: palette.fgShadow,
    },
  };
};
