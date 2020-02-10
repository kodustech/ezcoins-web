import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  filter: {
    padding: theme.spacing(1),
    '& > div': {
      width: '100%',
    },
  },
  filters: {
    marginTop: 50,
  },
}));
