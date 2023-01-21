import type { EditorColorGenerator } from "../../types/editorColors";

export const sideBar: EditorColorGenerator = (palette) => {
  return {
    sideBar: { background: palette.bgDark, border: palette.bgDarker },
    sideBarSectionHeader: {
      background: palette.bgMain,
      border: palette.bgDark,
    },
  };
};
