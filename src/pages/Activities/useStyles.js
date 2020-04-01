import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  container: {
    margin: theme.spacing(5),
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    textTransform: 'uppercase',
  },
}));
