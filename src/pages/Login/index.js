import React, { memo, useCallback, useMemo } from 'react';
import { Button, CircularProgress, Grid, TextField, Typography } from '@material-ui/core';
import gql from 'graphql-tag';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';

import source from '../../assets/images/bg-login.png';
import useStyles from './useStyles';

const USERS = gql`
  query {
    users(exceptMe: false) {
      id
      name
      avatar
    }
  }
`;

const LOGIN = gql`
  mutation($input: AuthInputType) {
    login(input: $input) {
      token
      user {
        id
        name
        email
        avatar
        wallet {
          id
          toOffer
          received
          balance
        }
      }
    }
  }
`;

const Login = memo(() => {
  const classes = useStyles();
  const history = useHistory();

  useQuery(USERS);

  const [login] = useMutation(LOGIN);

  const initialValues = useMemo(
    () => ({
      email: '',
      password: '',
    }),
    [],
  );

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .label('Email')
      .required(),
    password: Yup.string()
      .label('Senha')
      .required(),
  });

  const onSubmit = useCallback(
    async (input, { setSubmitting, setErrors }) => {
      try {
        const {
          data: {
            login: {
              token,
              user: { id },
            },
          },
        } = await login({ variables: { input } });
        localStorage.setItem('token', token);
        localStorage.setItem('userId', id);
        setSubmitting(false);
        history.push('/home');
      } catch ({ graphQLErrors: [{ details }] }) {
        setErrors(details);
        setSubmitting(false);
      }
    },
    [history, login],
  );

  const { handleSubmit, handleChange, values, isSubmitting, errors } = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  return (
    <Grid container className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={4}>
          <div className={classes.paper}>
            <Typography variant="h4" color="textSecondary" className={classes.title}>
              Bem Vindo ao
            </Typography>
            <Typography variant="h2" className={classes.title}>
              ez.coins
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                error={!!errors.email}
                helperText={errors.email}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                value={values.email}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleChange}
                value={values.password}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={isSubmitting}
              >
                {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
                ENTRAR
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={4}>
          <img src={source} alt="" className={classes.image} />
        </Grid>
      </Grid>
    </Grid>
  );
});

export default Login;
