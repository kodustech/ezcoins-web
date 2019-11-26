import React, { memo } from 'react';
import { List } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import { addIndex, map, prop } from 'ramda';

import Activity from './Activity';

const Activities = memo(({ activities }) => {
  return (
    <List>
      {addIndex(map)(
        (activity, index) => (
          <Activity key={prop('id', activity)} activity={activity} odd={Boolean(index % 2)} />
        ),
        activities,
      )}
    </List>
  );
});

Activities.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.number,
      reason: PropTypes.string,
      receiver: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
      }),
      sender: PropTypes.shape({
        avatar: PropTypes.string,
      }),
    }),
  ),
};

Activities.defaultProps = {
  activities: [],
};

export default Activities;
