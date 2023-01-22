import type { EditorColorGenerator } from "../../types/editorColors";

export const tab: EditorColorGenerator = (palette) => {
  return {
    tab: {
      activeForeground: palette.fgMain,
      activeBorderTop: palette.purple,
      activeModifiedBorder: palette.blue,
      border: palette.bgDarker,
      inactiveBackground: palette.bgDark,
      hoverBackground: palette.bgLight,
    },
  };
};
