import { makeStyles } from '@material-ui/core';

// eslint-disable-next-line no-unused-vars
export default makeStyles(theme => ({
  container: {
    marginTop: 30,
  },

  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 22,
    fontStyle: 'normal',
    marginTop: 30,
    textTransform: 'uppercase',
    backgroundClor: 'blue',
  },

  divider: {
    width: 140,
    height: 2,
    background: 'black',
    position: 'absolute',
    left: 'calc(50% - 60px)',
    marginTop: 8,
  },

  bigAvatar: {
    width: 320,
    height: 320,
  },

  formUser: {
    paddingTop: 50,
  },
}));
