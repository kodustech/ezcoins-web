import React, { memo } from 'react';
import {
  Avatar,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  GridList,
  GridListTile,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import moment from 'moment';

import image from '../../assets/images/bg-login.png';
import useStyles from './useStyles';
import avatar from '../../assets/images/avatar.jpeg';

const tileData = [
  {
    img: image,
    title: 'title',
    author: 'author',
  },
  {
    img: image,
    title: 'title',
    author: 'author',
  },
  {
    img: image,
    title: 'title',
    author: 'author',
  },
  {
    img: image,
    title: 'title',
    author: 'author',
  },
  {
    img: image,
    title: 'title',
    author: 'author',
  },
  {
    img: image,
    title: 'title',
    author: 'author',
  },
  {
    img: image,
    title: 'title',
    author: 'author',
  },
];

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
        <GridList className={classes.gridList} cols={2.1}>
          {tileData.map((_, index) => (
            <GridListTile key={index.toString()} style={{ height: 'auto' }}>
              <Grid container fullWidth component={Paper} style={{ borderRadius: 16 }}>
                <Grid xs={1} className={classes.edge} />
                <Grid container xs={11} className={classes.body}>
                  <Grid xs={7} component={Typography} variant="h4">
                    Parabéns
                  </Grid>
                  <Grid
                    xs={5}
                    component={KeyboardDatePicker}
                    id="date-picker-dialog"
                    format="DD/MM/YYYY"
                    value={moment()}
                    onChange={() => {}}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                  <Grid
                    xs={3}
                    component={Typography}
                    variant="subtitle1"
                    className={classes.formRoot}
                  >
                    Para:
                  </Grid>
                  <Grid xs={9} component={FormControl} className={classes.formRoot}>
                    <Select value={null} onChange={() => {}} variant="outlined" displayEmpty>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </Grid>
                  <Grid
                    xs={3}
                    component={Typography}
                    variant="subtitle1"
                    className={classes.formRoot}
                  >
                    Motivo:
                  </Grid>
                  <Grid component={FormControl} xs={9} className={classes.formRoot}>
                    <Typography variant="body1">
                      <TextField
                        id="standard-adornment-amount"
                        variant="outlined"
                        multiline
                        rows={2}
                        className={classes.multiline}
                        value="O cara fez uma parada tão da hora que eu vou escrever um texto de agradecimento inclusive vou dar uma aumento"
                        onChange={() => {}}
                      />
                    </Typography>
                  </Grid>
                  <Grid xs={9} />
                  <Grid component={FormControl} xs={3} className={classes.formRoot}>
                    <OutlinedInput
                      id="standard-adornment-amount"
                      value={100}
                      onChange={() => {}}
                      startAdornment={<InputAdornment position="start">EZȻ</InputAdornment>}
                      labelWidth={60}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </GridListTile>
          ))}
        </GridList>
        <Grid container justify="center">
          <Grid container xs={6} component={Paper} style={{ borderRadius: 16 }}>
            <Grid xs={1} className={classes.edge} />
            <Grid container xs={11} className={classes.body}>
              <Grid xs={7} component={Typography} variant="h4">
                Parabéns
              </Grid>
              <Grid
                xs={5}
                component={KeyboardDatePicker}
                id="date-picker-dialog"
                format="DD/MM/YYYY"
                value={moment()}
                onChange={() => {}}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <Grid xs={3} component={Typography} variant="subtitle1" className={classes.formRoot}>
                Para:
              </Grid>
              <Grid xs={9} component={FormControl} className={classes.formRoot}>
                <Select value={null} onChange={() => {}} variant="outlined" displayEmpty>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid xs={3} component={Typography} variant="subtitle1" className={classes.formRoot}>
                Motivo:
              </Grid>
              <Grid component={FormControl} xs={9} className={classes.formRoot}>
                <Typography variant="body1">
                  <TextField
                    id="standard-adornment-amount"
                    variant="outlined"
                    multiline
                    rows={2}
                    className={classes.multiline}
                    value="O cara fez uma parada tão da hora que eu vou escrever um texto de agradecimento inclusive vou dar uma aumento"
                    onChange={() => {}}
                  />
                </Typography>
              </Grid>
              <Grid xs={9} />
              <Grid component={FormControl} xs={3} className={classes.formRoot}>
                <OutlinedInput
                  id="standard-adornment-amount"
                  value={100}
                  onChange={() => {}}
                  startAdornment={<InputAdornment position="start">EZȻ</InputAdornment>}
                  labelWidth={60}
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
