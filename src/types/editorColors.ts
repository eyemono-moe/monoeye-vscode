import type { ColorPalette, HexColor } from "./palette";

type EditorColors = {
  [key: string]: HexColor | EditorColors;
};

export type FlatEditorColors = {
  [key: string]: HexColor;
};

export type EditorColorGenerator = (palette: ColorPalette) => EditorColors;
