import type { EditorColorGenerator } from "../../types/editorColors";
import { opacity } from "../opacity";

export const minimap: EditorColorGenerator = (palette) => {
  return {
    minimap: {
      errorHighlight: `${palette.orange}${opacity.opacityHigh}`,
      findMatchHighlight: palette.red,
      foregroundOpacity: `#0000${opacity.opacity100}`,
      selectionHighlight: `${palette.blue}${opacity.opacityHigh}`,
      selectionOccurrenceHighlight: `${palette.blue}${opacity.opacityHigh}`,
    },
  };
};
