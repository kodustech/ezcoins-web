import React, { memo } from 'react';
import {
  Container,
  Divider,
  Grid,
  TextField,
  Switch,
  FormControlLabel,
  ButtonBase,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';

import useStyles from './useStyles';
import avatar from '../../assets/images/Ellipse 2.png';

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
      <Grid container justify="space-between" className={clsx(classes.container, classes.formUser)}>
        <Grid item className={classes.bigAvatar}>
          <ButtonBase
            focusRipple
            key="avatar"
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: 322,
              height: 322,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${avatar})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                Inserir foto de perfil
              </Typography>
            </span>
          </ButtonBase>
        </Grid>
        <Grid item xs={6}>
          <form>
            <div>
              <span>Nome</span>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="nome"
                name="nome"
                autoFocus
              />
            </div>
            <div style={{ paddingTop: 15 }}>
              <span>E-mail</span>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                name="email"
                autoFocus
              />
            </div>
            <div style={{ paddingTop: 15 }}>
              <span>Data de Início</span>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="dataDeInicio"
                name="dataDeInicio"
                autoFocus
              />
            </div>
            <div style={{ paddingTop: 15 }}>
              <span style={{ display: 'block' }}>Administrador</span>
              <FormControlLabel value="top" control={<Switch color="primary" />} />
            </div>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
});

Users.propTypes = {};
Users.defaultProps = {};
export default Users;
