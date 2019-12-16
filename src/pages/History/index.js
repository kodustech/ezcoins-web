import React, { memo } from 'react';
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';

import { Container, CssBaseline, Grid } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import ActivitiesList from '../../lists/Activities';
import useFilters from './useFilters';

const DONATIONS = gql`
  query($filters: DonationFilterType = {}) {
    donations(filters: $filters) {
      id
      insertedAt
      quantity
      reason
      sender {
        id
        name
      }
      receiver {
        id
        name
        avatar
      }
    }
  }
`;

const History = memo(() => {
  const [loadDonations, { data: { donations } = {}, loading, error }] = useLazyQuery(DONATIONS);

  const { minDateProps, maxDateProps } = useFilters(loadDonations);

  if (loading) return <div>Loading</div>;

  if (error) return <div>Error</div>;

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container style={{ marginTop: 50 }}>
          <Grid
            item
            xs={3}
            component={KeyboardDatePicker}
            format="dd/MM/yyyy"
            label="Doado do dia"
            invalidDateMessage="Data inválida"
            {...minDateProps}
          />
          <Grid
            item
            xs={3}
            component={KeyboardDatePicker}
            format="dd/MM/yyyy"
            label="Até o dia"
            invalidDateMessage="Data inválida"
            {...maxDateProps}
          />
        </Grid>
        <ActivitiesList activities={donations} />
      </Container>
    </>
  );
});

export default History;
