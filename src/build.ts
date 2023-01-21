import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { ColorPalette, HexColor } from "./types/palette";
import { FlatEditorColors } from "./types/editorColors";
import { TokenColors } from "./types/tokenColors";
import { editorColorGenerators } from "./colors/editor";
import { tokenColorGenerators } from "./colors/syntax";
import { flatten } from "./utils/util";

export type ThemeConfig = {
  name: string;
  fileName: string;
  author: string;
  type: "light" | "dark";
  palette: ColorPalette;
};

const themeDirectoryPath: string = join(__dirname, "../themes");

export function createThemesDirectory() {
  if (!existsSync(themeDirectoryPath)) {
    mkdirSync(themeDirectoryPath);
  }
}

function createEditorColors(palette: ColorPalette): FlatEditorColors {
  const editorColors = Object.values(editorColorGenerators)
    .map((generator) => generator(palette))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});
  return flatten<HexColor>(editorColors);
}

function createTokenColors(palette: ColorPalette): {
  scope: string | string[];
  settings: {
    foreground?: HexColor;
    fontsStyle?: string;
  };
}[] {
  return tokenColorGenerators
    .flatMap((generator) => generator(palette))
    .map((c) => {
      const fontStyle = c.settings.fontStyle;
      if (fontStyle === "" || fontStyle === undefined) {
        return c;
      } else {
        const joinedFontStyle = fontStyle.join(" ");
        return {
          ...c,
          settings: {
            ...c.settings,
            fontStyle: joinedFontStyle,
          },
        };
      }
    });
}

function saveTheme(fileName: string, theme: Record<string, unknown>) {
  const themePath = join(themeDirectoryPath, `${fileName}.json`);
  const themeString = JSON.stringify(theme, null, 2);
  writeFileSync(themePath, themeString);
}

export function createTheme(themeConfig: ThemeConfig): void {
  const editorColors = createEditorColors(themeConfig.palette);
  const tokenColors = createTokenColors(themeConfig.palette);
  const theme = {
    name: themeConfig.name,
    author: themeConfig.author,
    type: themeConfig.type,
    semanticHighlighting: true,
    colors: editorColors,
    tokenColors: tokenColors,
  };
  saveTheme(themeConfig.fileName, theme);
  console.log(`👁️ ${themeConfig.name} has opened its eye.`);
}
