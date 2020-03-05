import React, { memo, useCallback } from 'react';
import { Avatar, Button, CircularProgress, Grid, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { KeyboardDatePicker } from '@material-ui/pickers';
import gql from 'graphql-tag/src';
import { useMutation } from '@apollo/react-hooks';

import useStyles from './useStyles';

const CREATE_USER = gql`
  mutation($input: UserInputType!) {
    createUser(input: $input) {
      id
      name
      email
      avatar
    }
  }
`;

const User = memo(() => {
  const classes = useStyles();

  const [createUser] = useMutation(CREATE_USER);

  const onSubmit = useCallback(
    async ({ cpf: password, ...values }, { setSubmitting, setErrors }) => {
      try {
        await createUser({
          variables: { input: { password, passwordConfirmation: password, ...values } },
        });
        setSubmitting(false);
      } catch ({ graphQLErrors: [{ details }] }) {
        setErrors(details);
        setSubmitting(false);
      }
    },
    [createUser],
  );

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
    setFieldValue,
    values: { avatar, hiredAt },
  } = useFormik({
    initialValues: { hiredAt: new Date() },
    onSubmit,
    validationSchema,
  });

  const onChangeHiredAt = useCallback(value => setFieldValue('hiredAt', value), [setFieldValue]);

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
                name="hiredAt"
                variant="inline"
                inputVariant="outlined"
                label="Contratado em"
                format="dd/MM/yyyy"
                onChange={onChangeHiredAt}
                value={hiredAt}
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
