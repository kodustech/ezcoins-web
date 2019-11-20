import React, { memo } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { Container, CssBaseline } from '@material-ui/core';
import ActivitiesList from '../../lists/Activities';

const DONATIONS = gql`
  query {
    donations {
      id
      quantity
      reason
      sender {
        email
      }
      receiver {
        email
      }
    }
  }
`;

const History = memo(() => {
  const { data: { donations } = {}, loading, error } = useQuery(DONATIONS);

  if (loading) return <div>Loading</div>;

  if (error) return <div>Error</div>;

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <ActivitiesList activities={donations} />
      </Container>
    </>
  );
});

export default History;
