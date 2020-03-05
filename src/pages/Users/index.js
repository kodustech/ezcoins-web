import React, { memo } from 'react';
import { Container, Divider } from '@material-ui/core';

import useStyles from './useStyles';

import UserForm from '../../forms/User';

const Users = memo(() => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <div className={classes.container}>
        <div className={classes.title}>Cadastro de novo usuário</div>
        <Divider className={classes.divider} />
      </div>
      <UserForm />
    </Container>
  );
});

Users.propTypes = {};
Users.defaultProps = {};
export default Users;
