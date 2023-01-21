import type { EditorColorGenerator } from "../../types/editorColors";
import { opacity } from "../opacity";

export const minimap: EditorColorGenerator = (palette) => {
  return {
    minimap: {
      errorHighlight: `${palette.red}${opacity.opacityHigh}`,
      findMatchHighlight: palette.orange,
      foregroundOpacity: `#0000${opacity.opacity100}`,
      selectionHighlight: `${palette.blue}${opacity.opacityHigh}`,
      selectionOccurrenceHighlight: `${palette.blue}${opacity.opacityHigh}`,
    },
  };
};
