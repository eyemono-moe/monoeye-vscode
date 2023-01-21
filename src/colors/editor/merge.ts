import type { EditorColorGenerator } from "../../types/editorColors";
import { opacity } from "../opacity";

export const merge: EditorColorGenerator = (palette) => {
  return {
    merge: {
      commonHeaderBackground: `${palette.bgMain}${opacity.opacityLow}`,
      currentHeaderBackground: `${palette.green}${opacity.opacityLow}`,
      incomingHeaderBackground: `${palette.blue}${opacity.opacityLow}`,
    },
  };
};
