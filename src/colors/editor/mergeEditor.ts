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
        handledFocused: { border: `${palette.fgSub}${opacity.opacityHigh}` },
        handledUnfocused: {
          border: `${palette.fgSub}${opacity.opacityHigh}`,
        },
        unhandled: {
          minimapOverViewRuler: `${palette.orange}${opacity.opacityLow}`,
        },
        unhandledFocused: {
          border: `${palette.orange}${opacity.opacityHigh}`,
        },
        unhandledUnfocused: {
          border: `${palette.orange}${opacity.opacityLow}`,
        },
      },
      conflictingLines: {
        background: `${palette.yellow}${opacity.opacityLow}`,
      },
    },
  };
};
