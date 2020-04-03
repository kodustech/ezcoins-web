import React, { memo } from 'react';
import { Container, Divider } from '@material-ui/core';

import useStyles from './useStyles';

import ActivitiesTable from '../../components/ActivitiesTable';

const Activities = memo(() => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <div className={classes.container}>
        <div className={classes.title}>Atividades</div>
        <Divider className={classes.divider} />
      </div>
      <ActivitiesTable />
    </Container>
  );
});

export default Activities;
