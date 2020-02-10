import React, { memo, useRef } from 'react';
import { Container, CssBaseline, Grid } from '@material-ui/core';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Lottie from 'react-lottie';

import Typography from '@material-ui/core/Typography';
import useForm from './useForm';
import openBox from '../../assets/lottiefiles/8367-open-box.json';
import emptyBox from '../../assets/lottiefiles/629-empty-box.json';
import AvatarSelect from '../../components/AvatarSelect';
import DonationCard from '../../components/DonationCard';
import useStyles from './useStyles';

const USER = gql`
  query($id: ID) {
    user(id: $id) {
      id
      wallet {
        id
        toOffer
      }
    }
  }
`;

const USERS = gql`
  query {
    users(exceptMe: true) {
      id
      name
      avatar
    }
  }
`;

const Donate = memo(() => {
  const classes = useStyles();

  const animation = useRef(null);
  const container = useRef(null);

  const { data: { users = [] } = {}, error, loading } = useQuery(USERS);
  const { data: { user: { wallet: { toOffer } = {} } = {} } = {} } = useQuery(USER, {
    variables: { id: localStorage.getItem('userId') },
    fetchPolicy: 'cache-only',
  });

  const form = useForm();

  if (loading) return <div>Loading</div>;

  if (error) return <div>Erro</div>;

  if (!toOffer)
    return (
      <Grid container justify="center">
        <Typography variant="h5" align="center" className={classes.title}>
          Você já utilizou todos os ezcoins para doar este mês :(
        </Typography>
        <Lottie
          options={{
            animationData: emptyBox,
          }}
          height={500}
          isClickToPauseDisabled
        />
      </Grid>
    );

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <AvatarSelect
          name="receiverUserId"
          data={users}
          onChange={form.setFieldValue}
          value={form.receiverUserId}
        />
        <Grid
          ref={container}
          container
          justify="center"
          style={{
            position: 'relative',
            zIndex: 998,
            marginBottom: -150,
          }}
        >
          <DonationCard animation={animation} container={container} users={users} {...form} />
        </Grid>
        <Grid container justify="center">
          <Lottie
            ref={animation}
            options={{
              autoplay: false,
              loop: false,
              animationData: openBox,
            }}
            style={{
              height: 600,
              transitionProperty: 'all',
              transitionDuration: '1s',
              transitionTimingFunction: 'ease-in-out',
            }}
            isClickToPauseDisabled
            isStopped
            isPaused
          />
        </Grid>
      </Container>
    </>
  );
});

export default Donate;
