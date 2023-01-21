import type { EditorColorGenerator } from "../../types/editorColors";

export const activityBar: EditorColorGenerator = (palette) => {
  return {
    activityBar: {
      background: palette.bgDarker,
      foreground: palette.fgShadow,
    },
    activityBarBadge: {
      background: palette.purple,
      foreground: palette.bgDarker,
    },
  };
};
