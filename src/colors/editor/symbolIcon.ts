import type { EditorColorGenerator } from "../../types/editorColors";

export const symbolIcon: EditorColorGenerator = (palette) => {
  return {
    symbolIcon: {
      classForeground: palette.red,
      constructorForeground: palette.purple,
      enumeratorForeground: palette.red,
      enumeratorMemberForeground: palette.cyan,
      eventForeground: palette.red,
      fieldForeground: palette.cyan,
      functionForeground: palette.purple,
      interfaceForeground: palette.cyan,
      methodForeground: palette.purple,
      variableForeground: palette.cyan,
    },
  };
};
