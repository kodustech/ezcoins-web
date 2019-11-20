import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  body: {
    backgroundColor: theme.palette.primary.light,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    padding: 10,
    color: 'white',
  },
  card: {
    zIndex: 999,
    borderRadius: 16,
    mouse: 'pointer',
  },
  edge: {
    backgroundColor: theme.palette.primary.dark,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  multiline: {
    width: '100%',
  },
  formRoot: {
    marginTop: 10,
  },
}));
