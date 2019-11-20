import React, { memo, useCallback } from 'react';
import { Avatar, Grid } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import { map } from 'ramda';

import useStyles from './useStyles';

const AvatarSelect = memo(({ data, name, onChange, value }) => {
  const classes = useStyles();

  const onClick = useCallback(({ target: { id } }) => onChange(name, id), [name, onChange]);

  return (
    <Grid container justify="center" spacing={2} className={classes.container}>
      {map(
        ({ id, email }) => (
          <Grid key={id}>
            <Avatar
              id={id}
              onClick={onClick}
              name={name}
              value={value}
              className={`${classes.avatar} ${id === value ? 'selected' : ''}`}
            >
              {email.substr(0, 2)}
            </Avatar>
          </Grid>
        ),
        data,
      )}
    </Grid>
  );
});

AvatarSelect.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      email: PropTypes.string,
    }),
  ),
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

AvatarSelect.defaultProps = {
  data: [],
  name: '',
  onChange: () => {},
  value: '',
};

export default AvatarSelect;
