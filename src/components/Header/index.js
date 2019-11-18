import React, { memo, useCallback, useMemo, useState } from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  AccountCircle,
  MoreVert as MoreIcon,
  Notifications as NotificationsIcon,
} from '@material-ui/icons';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useHistory, useLocation } from 'react-router-dom';

import Chip from '@material-ui/core/Chip';
import useStyles from './useStyles';
import avatar from '../../assets/images/avatar.jpeg';

const LOGOUT = gql`
  mutation {
    logout @client
  }
`;

const Header = memo(() => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);

  const isMenuOpen = useMemo(() => Boolean(anchorEl), [anchorEl]);
  const isMobileMenuOpen = useMemo(() => Boolean(mobileAnchorEl), [mobileAnchorEl]);

  const openProfileMenu = useCallback(({ currentTarget }) => {
    setAnchorEl(currentTarget);
  }, []);

  const openMobileMenu = useCallback(({ currentTarget }) => {
    setMobileAnchorEl(currentTarget);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileAnchorEl(null);
  }, []);

  const closeMenu = useCallback(() => {
    setAnchorEl(null);
    closeMobileMenu();
  }, [closeMobileMenu]);

  const history = useHistory();

  const { pathname } = useLocation();

  const isAuthenticated = useMemo(() => pathname !== '/login', [pathname]);

  const [logoutMutation] = useMutation(LOGOUT);

  const logout = useCallback(async () => {
    await logoutMutation();
    closeMenu();
    history.push('/login');
  }, [closeMenu]);

  const gotoHistory = useCallback(() => {
    history.push('/history');
  }, []);

  const menuId = useMemo(() => 'primary-search-account-menu', []);

  const mobileMenuId = useMemo(() => 'primary-search-account-menu-mobile', []);

  return (
    isAuthenticated && (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              ez.coins
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button color="inherit" onClick={gotoHistory}>
                Histórico
              </Button>
              <Button color="inherit">Doar</Button>
              <Chip
                className={classes.profileContainer}
                label="EZȻ 50,00"
                onDelete={openProfileMenu}
                deleteIcon={
                  <div className={classes.profile}>
                    <Badge badgeContent={8} overlap="circle" color="secondary">
                      <Avatar src={avatar}>A</Avatar>
                    </Badge>
                  </div>
                }
              />
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={openMobileMenu}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={closeMenu}
        >
          <MenuItem onClick={closeMenu}>Minha conta</MenuItem>
          <MenuItem onClick={logout}>Sair</MenuItem>
        </Menu>
        <Menu
          anchorEl={mobileAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={closeMobileMenu}
        >
          <MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem onClick={openProfileMenu}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Menu>
      </div>
    )
  );
});

export default Header;
