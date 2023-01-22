import type { EditorColorGenerator } from "../../types/editorColors";
import { opacity } from "../opacity";

export const scrollbar: EditorColorGenerator = (palette) => {
  return {
    scrollbar: { shadow: "#000000" },
    scrollbarSlider: {
      activeBackground: `${palette.fgMain}${opacity.opacityLow}`,
      hoverBackground: `${palette.fgSub}${opacity.opacityLow}`,
      background: `${palette.fgShadow}${opacity.opacityLow}`,
    },
  };
};
