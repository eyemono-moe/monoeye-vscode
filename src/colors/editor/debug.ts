import type { EditorColorGenerator } from "../../types/editorColors";

export const debug: EditorColorGenerator = (palette) => {
  return {
    debugExceptionWidget: {
      background: palette.bgLight,
      border: palette.bgDarker,
    },
    debugIcon: {
      breakpointCurrentStackframeForeground: palette.yellow,
      breakpointDisabledForeground: palette.fgShadow,
      breakpointForeground: palette.red,
      breakpointStackframeForeground: palette.green,
      breakpointUnverifiedForeground: palette.fgShadow,
      continueForeground: palette.cyan,
      disconnectForeground: palette.orange,
      pauseForeground: palette.cyan,
      restartForeground: palette.green,
      startForeground: palette.green,
      stepBackForeground: palette.cyan,
      stepIntoForeground: palette.cyan,
      stepOutForeground: palette.cyan,
      stepOverForeground: palette.cyan,
      stopForeground: palette.orange,
    },
    debugTokenExpression: {
      boolean: palette.blue,
      error: palette.red,
      name: palette.purple,
      number: palette.green,
      string: palette.orange,
      value: palette.fgSub,
    },
    debugToolBar: { background: palette.bgLight },
    debugView: {
      exceptionLabelBackground: palette.bgLight,
      stateLabelBackground: palette.bgLight,
      valueChangedHighlight: palette.green,
    },
  };
};
