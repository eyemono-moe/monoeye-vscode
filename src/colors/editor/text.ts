import type { EditorColorGenerator } from "../../types/editorColors";

export const text: EditorColorGenerator = (palette) => {
  return {
    textBlockQuote: { background: palette.bgLight, border: palette.fgShadow },
    textCodeBlock: { background: palette.bgLight },
    textLink: { activeForeground: palette.blue, foreground: palette.blue },
    textPreformat: { foreground: palette.fgMain },
    textSeparator: { foreground: palette.fgShadow },
  };
};
