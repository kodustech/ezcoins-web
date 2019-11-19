import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  avatar: {
    margin: 10,
    height: 80,
    width: 80,
  },
  container: {
    marginTop: 15,
    marginBottom: 50,
  },
  edge: {
    backgroundColor: theme.palette.primary.dark,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  body: {
    backgroundColor: theme.palette.primary.light,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    padding: 10,
    color: 'white',
  },
  multiline: {
    width: '100%',
  },
  formRoot: {
    marginTop: 10,
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    height: 300,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));
