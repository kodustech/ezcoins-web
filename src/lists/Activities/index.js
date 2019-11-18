import React, { memo } from 'react';
import { Container, CssBaseline, List } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import { addIndex, map, prop } from 'ramda';

import Activity from './Activity';

const Activities = memo(({ activities }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <List>
          {addIndex(map)(
            (activity, index) => (
              <Activity key={prop('id', activity)} activity={activity} odd={Boolean(index % 2)} />
            ),
            activities,
          )}
        </List>
      </Container>
    </>
  );
});

Activities.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.number,
      reason: PropTypes.string,
      receiver: PropTypes.shape({
        email: PropTypes.string,
      }),
      sender: PropTypes.shape({
        email: PropTypes.string,
      }),
    }),
  ),
};

Activities.defaultProps = {
  activities: [],
};

export default Activities;
