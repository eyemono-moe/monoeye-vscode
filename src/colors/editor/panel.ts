import type { EditorColorGenerator } from "../../types/editorColors";
import { opacity } from "../opacity";

export const panel: EditorColorGenerator = (palette) => {
  return {
    panel: { border: `${palette.fgMain}${opacity.opacityLow}` },
    panelSectionHeader: {
      background: `${palette.fgMain}${opacity.opacityLow}`,
    },
    panelTitle: { activeForeground: palette.fgSub },
  };
};
