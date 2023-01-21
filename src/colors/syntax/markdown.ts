import { TokenColorGenerator } from "../../types/tokenColors";

export const markdown: TokenColorGenerator = (palette) => {
  return [
    // Paragraph
    {
      scope: "meta.paragraph.markdown",
      settings: {
        foreground: palette.fgMain,
      },
    },

    // Heading
    {
      scope: "entity.name.section.markdown",
      settings: {
        foreground: palette.purple,
      },
    },

    // List
    {
      scope: "markup.list",
      settings: {
        foreground: palette.fgMain,
      },
    },
  ];
};
