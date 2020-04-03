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
    createData(
      'EVENTO_PARTICIPAÇÃO',
      'Participar de eventos relacionados a área de TI, e postar uma foto no instagram marcando @ez.devs ou enviar a foto para o Ed do marketing.',
      5,
    ),
    createData('EVENTO_REALIZAÇÃO', 'Realizar evento, workshop, bootcamp pela Ez.devs.', 35),
    createData('EZ.TALKS', 'Realizar o ez.talks na ez para o pessoal da empresa.', 15),
    createData('OPEN_SOURCE_LIB', 'Disponibilizar uma lib própria para comunidade.', 15),
    createData(
      'OS_PR_ACEITO',
      'Contribuir de forma relevante com algum projeto open source da comunidade. PR tem sido aceito pelo owner do projeto. ',
      10,
    ),
    createData(
      'OS_PR_SUBMETIDO',
      'Contribuir de forma relevante com algum projeto open source da comunidade. PR submetido, mas não aceito.',
      5,
    ),
    createData('PALESTRA', 'Realizar palestra pela EZ.devs.', 25),
    createData('VÍDEO_CONTEÚDO', 'Gravar um vídeo de conteúdo para o canal da EZ.devs.', 15),
    createData('VÍDEO_INSTAGRAM', 'Gravar vídeo para o Insta da EZ.devs.', 10),
    createData('VÍDEO_PARTICIPAÇÃO', 'Gravar vídeo para o canal do Youtube como "entrevistado"', 5),
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
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="center">{row.coins}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default ActivitiesTable;
