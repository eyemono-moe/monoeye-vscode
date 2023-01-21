import type { EditorColorGenerator } from "../../types/editorColors";

export const tree: EditorColorGenerator = (palette) => {
  return {
    tree: {
      indentGuidesStroke: palette.fgShadow,
      tableColumnsBorder: palette.fgShadow,
    },
  };
};
