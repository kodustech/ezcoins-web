import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import source from '../assets/images/bg-login.png';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    height: '90vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  title: {
    marginBottom: '30px',
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={4}>
          <div className={classes.paper}>
            <Typography variant="h4" color="textSecondary" className={classes.title}>
              Bem vindo ao
            </Typography>
            <Typography variant="h2" className={classes.title}>
              ez.coins
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
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
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
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
}
