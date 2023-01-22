import type { EditorColorGenerator } from "../../types/editorColors";

export const symbolIcon: EditorColorGenerator = (palette) => {
  return {
    symbolIcon: {
      classForeground: palette.blue,
      constructorForeground: palette.cyan,
      enumeratorForeground: palette.blue,
      enumeratorMemberForeground: palette.cyan,
      eventForeground: palette.red,
      fieldForeground: palette.cyan,
      functionForeground: palette.cyan,
      interfaceForeground: palette.blue,
      methodForeground: palette.cyan,
      variableForeground: palette.red,
    },
  };
};
