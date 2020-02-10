import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  container: {
    margin: 10,
    borderRadius: 16,
  },
  date: {
    borderRadius: 50,
    backgroundColor: '#fff',
    marginRight: 50,
    padding: '0 15px',
    height: 40,
    alignItems: 'center',
    '& > div': {
      height: '100%',
      color: theme.palette.secondary.dark,
    },
  },
  even: {
    backgroundColor: fade(theme.palette.primary.light, 0.2),
  },
  odd: {
    backgroundColor: fade(theme.palette.secondary.light, 0.2),
  },
  quantity: {
    backgroundColor: fade(theme.palette.primary.dark, 0.5),
    borderRadius: 5,
  },
}));
