import { TokenColorGenerator } from "../../types/tokenColors";
import { common } from "./common";
import { html } from "./html";
import { json } from "./json";
import { markdown } from "./markdown";

export const tokenColorGenerators: TokenColorGenerator[] = [
  common,
  html,
  json,
  markdown,
];
