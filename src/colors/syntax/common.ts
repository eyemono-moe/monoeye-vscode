import { TokenColorGenerator } from "../../types/tokenColors";

export const common: TokenColorGenerator = (palette) => {
  return [
    // Comments
    {
      scope: [
        "comment",
        "punctuation.definition.comment",
        "string.quoted.docstring",
      ],
      settings: {
        foreground: palette.fgShadow,
        fontStyle: ["italic"],
      },
    },

    // Font style
    {
      scope: ["emphasis", "markup.italic", "support"],
      settings: {
        fontStyle: ["italic"],
      },
    },
    {
      scope: ["strong", "markup.bold"],
      settings: {
        fontStyle: ["bold"],
      },
    },
    {
      scope: "markup.underline",
      settings: {
        fontStyle: ["underline"],
      },
    },

    // Constants
    {
      scope: "constant",
      settings: {
        foreground: palette.green,
      },
    },
    {
      scope: "string",
      settings: {
        foreground: palette.green,
      },
    },

    // Storage
    {
      scope: "storage",
      settings: {
        foreground: palette.purple,
      },
    },

    // Type, Class, Interface, Namespace
    {
      scope: [
        "entity.name.type",
        "support.type",
        "entity.name.namespace",
        "entity.name.type.interface",
        "support.class",
        "entity.name.class",
        "entity.name.type.class",
        "entity.other.inherited-class",
      ],
      settings: {
        foreground: palette.blue,
      },
    },

    // Function, Method
    {
      scope: ["entity.name.function", "entity.name.method", "support.function"],
      settings: {
        foreground: palette.cyan,
      },
    },

    // Other entities
    {
      scope: "entity",
      settings: {
        foreground: palette.cyan,
      },
    },

    // Invalid
    {
      scope: "invalid",
      settings: {
        foreground: palette.red,
      },
    },

    // Keyword
    {
      scope: "keyword",
      settings: {
        foreground: palette.purple,
      },
    },

    // Markup
    {
      scope: "markup.changed",
      settings: {
        foreground: palette.orange,
      },
    },
    {
      scope: "markup.deleted",
      settings: {
        foreground: palette.red,
      },
    },
    {
      scope: "markup.heading",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      scope: ["markup.inline.raw", "markup.raw"],
      settings: {
        foreground: palette.purple,
      },
    },
    {
      scope: "markup.inserted",
      settings: {
        foreground: palette.green,
      },
    },
    {
      scope: "markup.list",
      settings: {
        foreground: palette.cyan,
      },
    },
    {
      scope: "markup.quote",
      settings: {
        foreground: palette.fgSub,
      },
    },
    {
      scope: "markup.underline.link",
      settings: {
        foreground: palette.blue,
      },
    },

    // Punctuation
    {
      scope: "punctuation",
      settings: {
        foreground: palette.fgSub,
      },
    },

    // Variable
    {
      scope: "variable",
      settings: {
        foreground: palette.fgMain,
      },
    },
    {
      scope: "variable.parameter",
      settings: {
        foreground: palette.orange,
      },
    },
  ];
};
