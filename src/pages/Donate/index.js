import React, { memo } from 'react';
import { Avatar, Container, CssBaseline, FormControl } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { KeyboardDatePicker } from '@material-ui/pickers';

import moment from 'moment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import avatar from '../../assets/images/avatar.jpeg';
import useStyles from './useStyles';

const Donate = memo(() => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container justify="center" spacing={2} className={classes.container}>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
        </Grid>
        <Grid container justify="center" style={{ marginTop: 100 }}>
          <Grid container xs={5} component={Paper} style={{ borderRadius: 16 }}>
            <Grid
              xs={1}
              style={{
                height: 150,
                backgroundColor: 'red',
                borderTopLeftRadius: 16,
                borderBottomLeftRadius: 16,
              }}
            />
            <Grid
              container
              xs={11}
              style={{
                height: 150,
                backgroundColor: 'blue',
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,
                padding: 10,
              }}
            >
              <Grid xs={6} component={Typography} variant="h5">
                Parabéns
              </Grid>
              <Grid
                xs={6}
                component={KeyboardDatePicker}
                id="date-picker-dialog"
                format="DD/MM/YYYY"
                value={moment()}
                onChange={date => console.log(date)}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <Grid xs={6} component={Typography} variant="subtitle1">
                Para
              </Grid>
              <Grid xs={6} component={FormControl} className={classes.formControl}>
                <Select
                  value={null}
                  onChange={age => console.log(age)}
                  displayEmpty
                  className={classes.selectEmpty}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid xs={6} />
              <Grid component={FormControl} xs={6} className={classes.margin}>
                <Input
                  id="standard-adornment-amount"
                  value={100}
                  onChange={() => {}}
                  startAdornment={<InputAdornment position="start">EZȻ</InputAdornment>}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
});

export default Donate;
