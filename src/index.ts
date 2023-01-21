import { createTheme, createThemesDirectory } from "./build";
import { monoeyePalette } from "./themes/monoeye/palette";

function main() {
  createThemesDirectory();

  createTheme({
    name: "Monoeye",
    fileName: "Monoeye-color-theme",
    author: "Eyemono",
    palette: monoeyePalette,
    type: "dark",
  });
}

main();
