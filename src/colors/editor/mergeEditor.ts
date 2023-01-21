import type { EditorColorGenerator } from "../../types/editorColors";
import { opacity } from "../opacity";

export const mergeEditor: EditorColorGenerator = (palette) => {
  return {
    mergeEditor: {
      change: {
        background: `${palette.green}${opacity.opacityLow}`,
        word: { background: `${palette.green}${opacity.opacityLow}` },
      },
      changeBase: {
        background: `${palette.blue}${opacity.opacityLow}`,
        word: { background: `${palette.blue}${opacity.opacityLow}` },
      },
      conflict: {
        handled: {
          minimapOverViewRuler: `${palette.fgSub}${opacity.opacityLow}`,
        },
        handledFocused: { border: `${palette.fgSub}${opacity.opacityMedium}` },
        handledUnfocused: {
          border: `${palette.fgSub}${opacity.opacityMedium}`,
        },
        unhandled: {
          minimapOverViewRuler: `${palette.red}${opacity.opacityLow}`,
        },
        unhandledFocused: { border: `${palette.red}${opacity.opacityMedium}` },
        unhandledUnfocused: { border: `${palette.red}${opacity.opacityLow}` },
      },
      conflictingLines: {
        background: `${palette.yellow}${opacity.opacityLow}`,
      },
    },
  };
};
