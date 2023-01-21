import type { EditorColorGenerator } from "../../types/editorColors";
import { opacity } from "../opacity";

export const notebook: EditorColorGenerator = (palette) => {
  return {
    notebook: {
      cellStatusBarItemHoverBackground: `${palette.fgShadow}${opacity.opacityLow}`,
      cellToolbarSeparator: palette.fgShadow,
      symbolHighlightBackground: `${palette.fgShadow}${opacity.opacityLow}`,
    },
  };
};
