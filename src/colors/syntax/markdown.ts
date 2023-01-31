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
        fontStyle: ["bold"],
      },
    },

    // List
    {
      scope: "markup.list",
      settings: {
        foreground: palette.fgMain,
      },
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: palette.green,
      },
    },

    // Color Bold and Italic
    {
      scope: ["markup.bold.markdown", "markup.italic.markdown"],
      settings: {
        foreground: palette.green,
      },
    },

    // Quote
    {
      scope: "markup.quote.markdown meta.paragraph.markdown",
      settings: {
        foreground: palette.fgSub,
        fontStyle: ["italic"],
      },
    },
  ];
};
