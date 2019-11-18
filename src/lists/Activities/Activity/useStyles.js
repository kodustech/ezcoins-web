import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  container: {
    margin: 10,
    borderRadius: 16,
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
