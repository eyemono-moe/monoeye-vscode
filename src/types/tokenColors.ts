import type { ColorPalette, HexColor } from "./palette";

type Settings = {
  foreground?: HexColor;
  /** if "", clear inherited style */
  fontStyle?: ("italic" | "bold" | "underline" | "strikethrough")[] | "";
};

export type TokenColors = {
  scope: string | string[];
  settings: Settings;
}[];

export type TokenColorGenerator = (palette: ColorPalette) => TokenColors;
