import React, { memo } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@material-ui/core';

import useStyles from './useStyles';

const ActivitiesTable = memo(() => {
  const classes = useStyles();

  function createData(activity, description, coins) {
    return { activity, description, coins };
  }

  const rows = [
    createData(
      'ARTIGO_1000',
      'Artigos exclusivos de 1000 ou mais palavras postados no blog da EZ.devs',
      25,
    ),
    createData(
      'ARTIGO_500',
      'Artigos exclusivos de 500 a 699 palavras postados no blog da EZ.devs',
      10,
    ),
    createData(
      'ARTIGO_700',
      'Artigos exclusivos de 700 a 999 palavras postados no blog da EZ.devs',
      15,
    ),
    createData(
      'ARTIGO_TRADUÇÃO',
      'Traduzir um artigo seu para o inglês, e publicá-lo no medium da ez',
      5,
    ),
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Atividades</TableCell>
            <TableCell align="center">Descrição</TableCell>
            <TableCell align="center">Coins</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.activity}>
              <TableCell component="th" scope="row">
                {row.activity}
              </TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.coins}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default ActivitiesTable;
