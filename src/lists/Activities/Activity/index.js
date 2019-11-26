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

const Activity = memo(
  ({
    activity: {
      quantity,
      reason,
      receiver: { avatar: receiverAvatar, name: receiverName },
      sender: { name: senderName },
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
          <strong>{senderName}</strong>
          <span> doou a </span>
          <strong>{receiverName}</strong>
        </>
      ),
      [receiverName, senderName],
    );

    return (
      <ListItem alignItems="flex-start" className={containerClassName}>
        <ListItemAvatar>
          <Avatar src={receiverAvatar} />
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
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
    sender: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
  odd: PropTypes.bool,
};

Activity.defaultProps = {
  activity: {
    quantity: 0,
    reason: '',
    receiver: {
      avatar: '',
      name: '',
    },
    sender: {
      name: '',
    },
  },
  odd: false,
};

export default Activity;
