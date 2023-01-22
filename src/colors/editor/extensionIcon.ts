import type { EditorColorGenerator } from "../../types/editorColors";

export const extensionIcon: EditorColorGenerator = (palette) => {
  return {
    extensionIcon: {
      preReleaseForeground: palette.green,
      sponsorForeground: palette.orange,
      starForeground: palette.yellow,
    },
  };
};
