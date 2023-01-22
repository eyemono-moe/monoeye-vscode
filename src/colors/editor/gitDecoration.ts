import type { EditorColorGenerator } from "../../types/editorColors";

export const gitDecoration: EditorColorGenerator = (palette) => {
  return {
    gitDecoration: {
      addedResourceForeground: palette.green,
      conflictingResourceForeground: palette.orange,
      deletedResourceForeground: palette.orange,
      ignoredResourceForeground: palette.fgShadow,
      modifiedResourceForeground: palette.blue,
      renamedResourceForeground: palette.blue,
      stageDeletedResourceForeground: palette.orange,
      stageModifiedResourceForeground: palette.blue,
      submoduleResourceForeground: palette.cyan,
      untrackedResourceForeground: palette.green,
    },
  };
};
