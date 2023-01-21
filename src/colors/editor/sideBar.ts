import type { EditorColorGenerator } from "../../types/editorColors";

export const sideBar: EditorColorGenerator = (palette) => {
  return {
    sideBar: { background: palette.bgDark },
    sideBarSectionHeader: {
      background: palette.bgLight,
    },
  };
};
