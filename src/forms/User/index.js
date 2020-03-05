import React, { memo, useCallback } from 'react';
import { Avatar, Button, CircularProgress, Grid, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { KeyboardDatePicker } from '@material-ui/pickers';
import useStyles from './useStyles';

const User = memo(() => {
  const classes = useStyles();

  const onSubmit = useCallback(() => {}, []);

  const validationSchema = Yup.object().shape({
    avatar: Yup.string()
      .label('Avatar')
      .required(),
    cpf: Yup.string()
      .label('C.P.F.')
      .required(),
    email: Yup.string()
      .label('Email')
      .required(),
    hiredAt: Yup.date()
      .label('Contratado em')
      .required(),
    name: Yup.string()
      .label('Nome')
      .required(),
  });

  const {
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    values: { avatar },
  } = useFormik({
    initialValues: {},
    onSubmit,
    validationSchema,
  });

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={2}>
          <Avatar src={avatar} className={classes.avatar}>
            Avatar
          </Avatar>
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <TextField
                label="Nome"
                name="name"
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                inputProps={{
                  maxLength: 40,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                label="Email"
                name="email"
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                inputProps={{
                  maxLength: 40,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="C.P.F."
                name="cpf"
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                error={!!errors.cpf}
                helperText={errors.cpf}
                inputProps={{
                  maxLength: 11,
                }}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <TextField
                label="Avatar"
                name="avatar"
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                error={!!errors.avatar}
                helperText={errors.avatar}
                inputProps={{
                  maxLength: 500,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <KeyboardDatePicker
                variant="inline"
                inputVariant="outlined"
                label="Contratado em"
                format="dd/MM/yyyy"
                style={{
                  marginTop: 16,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={isSubmitting}
        >
          {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
          CADASTRAR
        </Button>
      </Grid>
    </form>
  );
});

User.propTypes = {};

User.defaultProps = {};

export default User;
