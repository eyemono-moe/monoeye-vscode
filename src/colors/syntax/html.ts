import { pathToFileURL } from "url";
import { TokenColorGenerator } from "../../types/tokenColors";

export const html: TokenColorGenerator = (palette) => {
  return [
    // Tag
    {
      scope: "entity.name.tag.html",
      settings: {
        foreground: palette.purple,
      },
    },

    // Attribute
    {
      scope: "entity.other.attribute-name.html",
      settings: {
        foreground: palette.cyan,
      },
    },
  ];
};
