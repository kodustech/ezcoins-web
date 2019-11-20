import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  profile: {
    height: 40,
    width: 50,
  },
  profileContainer: {
    alignContent: 'center',
    backgroundColor: fade(theme.palette.primary.light, 0.5),
    height: 55,
    marginLeft: 20,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));
