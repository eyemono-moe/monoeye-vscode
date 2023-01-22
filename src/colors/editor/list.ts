import type { EditorColorGenerator } from "../../types/editorColors";
import { opacity } from "../opacity";

export const list: EditorColorGenerator = (palette) => {
  return {
    list: {
      activeSelectionBackground: `${palette.purple}${opacity.opacityHigh}`,
      activeSelectionForeground: palette.fgMain,
      deemphasizedForeground: palette.fgSub,
      dropBackground: palette.bgMain,
      errorForeground: palette.orange,
      highlightForeground: palette.purple,
      hoverBackground: `${palette.purple}${opacity.opacityLow}`,
      inactiveSelectionBackground: `${palette.purple}${opacity.opacityLow}`,
      invalidItemForeground: palette.orange,
      warningForeground: palette.yellow,
    },
  };
};
