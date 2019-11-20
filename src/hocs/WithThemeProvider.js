import React, { memo } from 'react';
import { createMuiTheme, ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        backgroundColor: grey['50'],
        borderRadius: 4,
        paddingLeft: 10,
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: 'translate(14px, 13px) scale(1)',
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: 10,
        backgroundColor: grey['50'],
        borderRadius: 4,
      },
      multiline: {
        padding: 10,
        backgroundColor: grey['50'],
        borderRadius: 4,
      },
      adornedStart: {
        backgroundColor: grey['50'],
        borderRadius: 4,
      },
    },
  },
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
