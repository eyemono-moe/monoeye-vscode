import type { EditorColorGenerator } from "../../types/editorColors";
import { opacity } from "../opacity";

export const mergeEditor: EditorColorGenerator = (palette) => {
  return {
    // mergeEditor: {
    //   change: {
    //     background: `${palette.green}${opacity.opacity20}`,
    //     word: { background: `${palette.green}${opacity.opacity20}` },
    //   },
    //   changeBase: {
    //     background: `${palette.red}${opacity.opacity20}`,
    //     word: { background: `${palette.red}${opacity.opacity20}` },
    //   },
    //   conflict: {
    //     handled: { minimapOverViewRuler: "#adaca8ee" },
    //     handledFocused: { border: "#c1c1c1cc" },
    //     handledUnfocused: { border: "#86868649" },
    //     unhandled: { minimapOverViewRuler: "#fcba03FF" },
    //     unhandledFocused: { border: "#ffa600" },
    //     unhandledUnfocused: { border: "#ffa6007a" },
    //   },
    //   conflictingLines: { background: `${palette.yellow}${opacity.opacity20}` },
    // },
  };
};
