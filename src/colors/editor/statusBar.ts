import type { EditorColorGenerator } from "../../types/editorColors";

export const statusBar: EditorColorGenerator = (palette) => {
  return {
    statusBar: {
      background: palette.bgDark,
      debuggingBackground: palette.orange,
      foreground: palette.fgShadow,
      noFolderBackground: palette.bgDark,
    },
    statusBarItem: {
      activeBackground: palette.bgLight,
      compactHoverBackground: palette.bgLight,
      errorForeground: palette.red,
      hoverBackground: palette.bgLight,
      // prominentBackground: "Color.black.transparent(0.5)",
      // prominentHoverBackground: "Color.black.transparent(0.3)",
      warningForeground: palette.yellow,
    },
  };
};
