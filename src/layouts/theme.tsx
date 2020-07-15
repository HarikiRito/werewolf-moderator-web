import { createMuiTheme, Theme, ThemeOptions, ThemeProvider, ThemeProviderProps } from '@material-ui/core/styles';
import React, { FC, ReactElement } from 'react';
import { DefaultTheme } from '@material-ui/styles';

interface Props {}

export interface IRootTheme extends Theme {}
const RootTheme: FC<Props> = (props) => {
  const theme: Partial<IRootTheme> = {};
  return <ThemeProvider theme={createMuiTheme(theme)}>{props.children}</ThemeProvider>;
};

export { RootTheme };
