import type { EditorColorGenerator } from "../../types/editorColors";
import { opacity } from "../opacity";

export const diffEditor: EditorColorGenerator = (palette) => {
  return {
    diffEditor: {
      diagonalFill: palette.fgShadow,
      insertedLineBackground: `${palette.green}${opacity.opacityLow}`,
      insertedTextBackground: `${palette.green}${opacity.opacityLow}`,
      removedLineBackground: `${palette.orange}${opacity.opacityLow}`,
      removedTextBackground: `${palette.orange}${opacity.opacityLow}`,
    },
  };
};
