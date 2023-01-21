import type { EditorColorGenerator } from "../../types/editorColors";
import { opacity } from "../opacity";

export const list: EditorColorGenerator = (palette) => {
  return {
    list: {
      activeSelectionBackground: `${palette.purple}${opacity.opacityMedium}`,
      activeSelectionForeground: palette.fgMain,
      deemphasizedForeground: palette.fgSub,
      dropBackground: palette.bgMain,
      errorForeground: palette.red,
      highlightForeground: palette.purple,
      hoverBackground: `${palette.purple}${opacity.opacityLow}`,
      inactiveSelectionBackground: `${palette.purple}${opacity.opacityLow}`,
      invalidItemForeground: palette.red,
      warningForeground: palette.yellow,
    },
  };
};
