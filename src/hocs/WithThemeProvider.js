import React, { memo } from 'react';
import { createMuiTheme, ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#454c7d',
    },
    secondary: {
      main: '#557880',
    },
  },
});

const withThemeProvider = memo(({ children }) => {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
});

withThemeProvider.propTypes = {};

withThemeProvider.defaultProps = {};

export default withThemeProvider;
