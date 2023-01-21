import type { EditorColorGenerator } from "../../types/editorColors";
import { opacity } from "../opacity";

export const widget: EditorColorGenerator = (palette) => {
  return { widget: { shadow: `${palette.bgDarker}${opacity.opacityHigh}` } };
};
