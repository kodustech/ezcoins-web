import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  imageMarked: {
    height: 1,
    width: 20,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: 12,
    left: 'calc(50% - 10px)',
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
