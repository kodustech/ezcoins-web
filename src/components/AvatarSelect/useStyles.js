import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  avatar: {
    margin: 10,
    height: 80,
    width: 80,
    transition: 'all .2s ease-in-out',
    '&:hover, &.selected': {
      transform: 'scale(1.3)',
      cursor: 'pointer',
    },
  },
  container: {
    marginTop: 15,
    marginBottom: 50,
  },
}));
