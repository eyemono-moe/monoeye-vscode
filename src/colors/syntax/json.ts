import { TokenColorGenerator } from "../../types/tokenColors";

export const json: TokenColorGenerator = (palette) => {
  return [
    // property
    {
      scope: "support.type.property-name.json",
      settings: {
        foreground: palette.purple,
        fontStyle: "",
      },
    },
  ];
};
