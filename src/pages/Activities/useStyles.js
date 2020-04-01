import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  container: {
    margin: theme.spacing(5),
    justifyContent: 'center',
  },
  divider: {
    width: 140,
    height: 2,
    background: 'black',
    position: 'absolute',
    left: 'calc(50% - 60px)',
    marginTop: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    textTransform: 'uppercase',
  },
}));
