import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { ColorPalette, HexColor } from "./types/palette";
import { FlatEditorColors } from "./types/editorColors";
import { editorColorGenerators } from "./colors/editor";
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

function saveTheme(fileName: string, theme: Record<string, unknown>) {
  const themePath = join(themeDirectoryPath, `${fileName}.json`);
  const themeString = JSON.stringify(theme, null, 2);
  writeFileSync(themePath, themeString);
}

export function createTheme(themeConfig: ThemeConfig): void {
  const editorColors = createEditorColors(themeConfig.palette);
  const theme = {
    name: themeConfig.name,
    author: themeConfig.author,
    type: themeConfig.type,
    colors: editorColors,
    tokenColors: [],
  };
  saveTheme(themeConfig.fileName, theme);
  console.log(`👁️ ${themeConfig.name} has opened its eye.`);
}
