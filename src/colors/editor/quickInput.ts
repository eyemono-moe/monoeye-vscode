import type { EditorColorGenerator } from "../../types/editorColors";
import { opacity } from "../opacity";

export const quickInput: EditorColorGenerator = (palette) => {
  return {
    quickInputTitle: {
      background: palette.bgMain,
    },
    quickInputList: {
      focusBackground: `${palette.purple}${opacity.opacityLow}`,
    },
  };
};
