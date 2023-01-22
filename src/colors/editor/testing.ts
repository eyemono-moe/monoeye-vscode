import type { EditorColorGenerator } from "../../types/editorColors";

export const testing: EditorColorGenerator = (palette) => {
  return {
    testing: {
      iconErrored: palette.orange,
      iconFailed: palette.orange,
      iconPassed: palette.green,
      iconQueued: palette.yellow,
      iconSkipped: palette.fgShadow,
      iconUnset: palette.fgShadow,
    },
  };
};
