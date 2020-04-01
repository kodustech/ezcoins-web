import React, { memo } from 'react';
import { Container } from '@material-ui/core';

import useStyles from './useStyles';

import ActivitiesTable from '../../components/ActivitiesTable';

const Activities = memo(() => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.title}>
        <h1>Atividades</h1>
      </div>
      <ActivitiesTable />
    </Container>
  );
});

export default Activities;
