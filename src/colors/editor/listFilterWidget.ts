import type { EditorColorGenerator } from "../../types/editorColors";

export const listFilterWidget: EditorColorGenerator = (palette) => {
  return {
    listFilterWidget: {
      noMatchesOutline: palette.orange,
      outline: "#00000000",
    },
  };
};
