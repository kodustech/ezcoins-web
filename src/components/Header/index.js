import React, { memo, useCallback, useMemo, useState } from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { MoreVert as MoreIcon } from '@material-ui/icons';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';

import useStyles from './useStyles';

import HeaderItem from '../HeaderItem';

const USER = gql`
  query($id: ID) {
    user(id: $id) {
      id
      name
      email
      avatar
      isAdmin
      wallet {
        id
        toOffer
        received
        balance
      }
    }
  }
`;

const Header = memo(() => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [, setMobileAnchorEl] = useState(null);

  const menuId = useMemo(() => 'primary-search-account-menu', []);
  const mobileMenuId = useMemo(() => 'primary-search-account-menu-mobile', []);

  const isMenuOpen = useMemo(() => Boolean(anchorEl), [anchorEl]);

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

  const {
    client,
    data: {
      user: {
        avatar,
        isAdmin,
        wallet: { balance, toOffer },
      },
    },
  } = useQuery(USER, {
    variables: { id: localStorage.getItem('userId') },
    fetchPolicy: 'cache-only',
  });

  const logout = useCallback(async () => {
    closeMenu();
    await client.clearStore();
    localStorage.clear();
    history.push('/login');
  }, [client, closeMenu, history]);

  const renderDeleteIcon = useMemo(
    () => (
      <div className={classes.profile}>
        <Badge badgeContent={0} overlap="circle" color="secondary">
          <Avatar src={avatar}>A</Avatar>
        </Badge>
      </div>
    ),
    [avatar, classes.profile],
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            ez.coins
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {isAdmin && <HeaderItem path="/users" title="Usuários" />}
            <HeaderItem path="/history" title="Histórico" />
            <HeaderItem path="/donate" title={`Doar(${toOffer})`} />
            <Chip
              className={classes.profileContainer}
              label={`EZȻ ${balance}`}
              onDelete={openProfileMenu}
              deleteIcon={renderDeleteIcon}
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
    </div>
  );
});

export default Header;
