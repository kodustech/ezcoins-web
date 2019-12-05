import React, { memo } from 'react';
import {
  Container,
  Divider,
  Grid,
  TextField,
  Switch,
  FormControlLabel,
  Button,
  ButtonBase,
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles, fade } from '@material-ui/core/styles';
import clsx from 'clsx';

import useStyles from './useStyles';
import avatar from '../../assets/images/Ellipse 2.png';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: fade(theme.palette.primary.light, 0.8),
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, date, button) {
  return { name, date, button };
}

const rows = [
  createData('Ana Laura', '24/10/2018', 6.0),
  createData('Henrique Marciano', '28/01/2019', 9.0),
  createData('Maykon Michel', '24/09/2018', 16.0),
];

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
            <div className={classes.formPadding}>
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
            <div className={classes.formPadding}>
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
            <div className={classes.formPadding}>
              <span style={{ display: 'block' }}>Administrador</span>
              <FormControlLabel value="top" control={<Switch color="primary" />} />
            </div>
          </form>
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        className={clsx(classes.container, classes.containersSenconday)}
      >
        <Button type="submit" variant="contained" color="primary" className={classes.submit}>
          CADASTRAR
        </Button>
      </Grid>
      <Grid
        container
        justify="center"
        className={clsx(classes.container, classes.containersSenconday)}
      >
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell className={classes.borderLeft}>Nome</StyledTableCell>
                <StyledTableCell>Data de Início</StyledTableCell>
                <StyledTableCell align="right" className={classes.borderRight}>
                  Ações
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell>{row.date}</StyledTableCell>
                  <StyledTableCell align="right">
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Container>
  );
});

Users.propTypes = {};
Users.defaultProps = {};
export default Users;
