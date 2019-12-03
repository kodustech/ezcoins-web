import React, { memo } from 'react';
import { Container, Divider, Grid } from '@material-ui/core';

// eslint-disable-next-line import/no-named-as-default
import useStyles from './useStyles';

const RegisterUser = memo(() => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid container justify="center">
        <Grid item>
          <div className={classes.title}>Cadastro de novo usuário</div>
          <Divider className={classes.divider} />
        </Grid>
      </Grid>
    </Container>
  );
});

RegisterUser.propTypes = {};
RegisterUser.defaultProps = {};
export default RegisterUser;
