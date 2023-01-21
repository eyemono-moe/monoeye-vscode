import type { EditorColorGenerator } from "../../types/editorColors";
import { opacity } from "../opacity";

export const scrollbar: EditorColorGenerator = (palette) => {
  return {
    scrollbar: { shadow: "#000000" },
    scrollbarSlider: {
      activeBackground: `${palette.fgMain}${opacity.opacityHigh}`,
      hoverBackground: `${palette.fgMain}${opacity.opacityMedium}`,
      background: `${palette.fgMain}${opacity.opacityLow}`,
    },
  };
};
