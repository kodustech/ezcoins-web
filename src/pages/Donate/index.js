import React, { memo, useRef } from 'react';
import { Container, CssBaseline, Grid } from '@material-ui/core';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Lottie from 'react-lottie';

import useForm from './useForm';
import boxLottieFile from '../../assets/lottiefiles/8367-open-box';
import AvatarSelect from '../../components/AvatarSelect';
import DonationCard from '../../components/DonationCard';

const USERS = gql`
  query {
    users(exceptMe: true) {
      id
      email
    }
  }
`;

const Donate = memo(() => {
  const animation = useRef(null);
  const container = useRef(null);

  const { data: { users = [] } = {}, error, loading } = useQuery(USERS);

  const {
    handleChange,
    handleSubmit,
    setFieldValue,
    receiverUserId,
    reason,
    donateAt,
    quantity,
  } = useForm();

  if (loading) return <div>Loading</div>;

  if (error) return <div>Erro</div>;

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <AvatarSelect
          name="receiverUserId"
          data={users}
          onChange={setFieldValue}
          value={receiverUserId}
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
          <DonationCard
            animation={animation}
            container={container}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setFieldValue={setFieldValue}
            receiverUserId={receiverUserId}
            reason={reason}
            donateAt={donateAt}
            quantity={quantity}
            users={users}
          />
        </Grid>
        <Grid container justify="center">
          <Lottie
            ref={animation}
            options={{
              autoplay: false,
              loop: false,
              animationData: boxLottieFile,
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
