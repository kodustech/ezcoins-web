import React, { memo } from 'react';
import { Container, Divider, Grid, Avatar, TextField } from '@material-ui/core';

import useStyles from './useStyles';
import avatar from '../../assets/images/avatar.jpg';

const Users = memo(() => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid container justify="center" className={classes.container}>
        <Grid item xs={12}>
          <div className={classes.title}>Cadastro de novo usuário</div>
          <Divider className={classes.divider} />
        </Grid>
      </Grid>
      <Grid container justify="space-between" className={classes.container}>
        <Grid item component={Avatar} alt="Avatar" src={avatar} className={classes.bigAvatar} />
        <Grid item xs={6}>
          <form className={classes.formUser}>
            <span>Nome</span>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="nome"
              name="nome"
              autoFocus
            />
            <span>E-mail</span>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              name="email"
              autoFocus
            />
            <span>Data de Início</span>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="dataDeInicio"
              name="dataDeInicio"
              autoFocus
            />
          </form>
        </Grid>
      </Grid>
    </Container>
  );
});

Users.propTypes = {};
Users.defaultProps = {};
export default Users;
