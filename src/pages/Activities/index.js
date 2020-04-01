import React, { memo } from 'react';
import { Container } from '@material-ui/core';

import useStyles from './useStyles';

const Activities = memo(() => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <div className={classes.title}>
        <h1>Atividades</h1>
      </div>
    </Container>
  );
});

export default Activities;
