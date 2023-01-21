import type { EditorColorGenerator } from "../../types/editorColors";

export const gitDecoration: EditorColorGenerator = (palette) => {
  return {
    gitDecoration: {
      addedResourceForeground: palette.green,
      conflictingResourceForeground: palette.red,
      deletedResourceForeground: palette.red,
      ignoredResourceForeground: palette.fgShadow,
      modifiedResourceForeground: palette.blue,
      renamedResourceForeground: palette.blue,
      stageDeletedResourceForeground: palette.red,
      stageModifiedResourceForeground: palette.blue,
      submoduleResourceForeground: palette.cyan,
      untrackedResourceForeground: palette.green,
    },
  };
};
