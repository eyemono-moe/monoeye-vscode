import type { EditorColorGenerator } from "../../types/editorColors";

export const symbolIcon: EditorColorGenerator = (palette) => {
  return {
    symbolIcon: {
      classForeground: palette.orange,
      constructorForeground: palette.purple,
      enumeratorForeground: palette.orange,
      enumeratorMemberForeground: palette.cyan,
      eventForeground: palette.orange,
      fieldForeground: palette.cyan,
      functionForeground: palette.purple,
      interfaceForeground: palette.cyan,
      methodForeground: palette.purple,
      variableForeground: palette.cyan,
    },
  };
};
