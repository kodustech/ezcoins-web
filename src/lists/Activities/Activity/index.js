import React, { memo, useMemo } from 'react';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@material-ui/core';
import * as PropTypes from 'prop-types';

import useStyles from './useStyles';
import avatar from '../../../assets/images/avatar.jpeg';

const Activity = memo(
  ({
    activity: {
      quantity,
      reason,
      receiver: { email: receiver },
      sender: { email: sender },
    },
    odd,
  }) => {
    const classes = useStyles();

    const containerClassName = useMemo(
      () => `${classes.container} ${odd ? classes.odd : classes.even}`,
      [classes, odd],
    );

    const renderTitle = useMemo(
      () => (
        <>
          <strong>{sender}</strong>
          <span> doou a </span>
          <strong>{receiver}</strong>
        </>
      ),
      [receiver, sender],
    );

    return (
      <ListItem alignItems="flex-start" className={containerClassName}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={renderTitle}
          secondary={<Typography variant="body2">{reason}</Typography>}
        />
        <ListItemSecondaryAction>
          <Avatar variant="square" className={classes.quantity}>
            {quantity}
          </Avatar>
        </ListItemSecondaryAction>
      </ListItem>
    );
  },
);

Activity.propTypes = {
  activity: PropTypes.shape({
    quantity: PropTypes.number,
    reason: PropTypes.string,
    receiver: PropTypes.shape({
      email: PropTypes.string,
    }),
    sender: PropTypes.shape({
      email: PropTypes.string,
    }),
  }),
  odd: PropTypes.bool,
};

Activity.defaultProps = {
  activity: {
    quantity: 0,
    reason: '',
    receiver: {
      email: '',
    },
    sender: {
      email: '',
    },
  },
  odd: false,
};

export default Activity;
