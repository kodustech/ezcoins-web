import React, { memo } from 'react';
import {
  Container,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import gql from 'graphql-tag';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import { map } from 'ramda';

import useStyles from './useStyles';
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

const USERS = gql`
  query {
    users {
      id
      name
    }
  }
`;

const History = memo(() => {
  const classes = useStyles();

  const { data: { users = [] } = {} } = useQuery(USERS);
  const [loadDonations, { data: { donations } = {}, loading, error }] = useLazyQuery(DONATIONS);

  const { maxDateProps, minDateProps, receiverUserProps, senderUserProps } = useFilters(
    loadDonations,
  );

  if (loading) return <div>Loading</div>;

  if (error) return <div>Error</div>;

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container justify="space-between" className={classes.filters}>
          <Grid item xs={3} className={classes.filter}>
            <KeyboardDatePicker
              format="dd/MM/yyyy"
              label="Doado do dia"
              invalidDateMessage="Data inválida"
              {...minDateProps}
            />
          </Grid>
          <Grid item xs={3} className={classes.filter}>
            <KeyboardDatePicker
              format="dd/MM/yyyy"
              label="Até o dia"
              invalidDateMessage="Data inválida"
              {...maxDateProps}
            />
          </Grid>
          <Grid item xs={3} className={classes.filter}>
            <FormControl>
              <InputLabel shrink>De</InputLabel>
              <Select name="senderUserId" displayEmpty {...senderUserProps}>
                <MenuItem value="">Todos</MenuItem>
                {map(
                  ({ id, name }) => (
                    <MenuItem key={id} value={id}>
                      {name}
                    </MenuItem>
                  ),
                  users,
                )}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3} className={classes.filter}>
            <FormControl>
              <InputLabel shrink>Para</InputLabel>
              <Select name="receiverUserId" displayEmpty {...receiverUserProps}>
                <MenuItem value="">Todos</MenuItem>
                {map(
                  ({ id, name }) => (
                    <MenuItem key={id} value={id}>
                      {name}
                    </MenuItem>
                  ),
                  users,
                )}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <ActivitiesList activities={donations} />
      </Container>
    </>
  );
});

export default History;
