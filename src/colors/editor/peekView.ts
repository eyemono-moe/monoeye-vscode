import type { EditorColorGenerator } from "../../types/editorColors";
import { opacity } from "../opacity";

export const peekView: EditorColorGenerator = (palette) => {
  return {
    peekViewEditor: {
      background: palette.bgMain,
      matchHighlightBackground: `${palette.red}${opacity.opacityLow}`,
    },
    peekViewResult: {
      background: palette.bgMain,
      fileForeground: palette.fgSub,
      lineForeground: palette.fgShadow,
      matchHighlightBackground: `${palette.red}${opacity.opacityLow}`,
      selectionBackground: `${palette.fgShadow}${opacity.opacityMedium}`,
      selectionForeground: palette.fgMain,
    },
    peekViewTitleDescription: { foreground: palette.fgShadow },
    peekViewTitleLabel: { foreground: palette.fgSub },
  };
};
