import React, { memo, useCallback } from 'react';
import { Avatar, Grid } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import { map } from 'ramda';

import useStyles from './useStyles';

const AvatarSelect = memo(({ data, name, onChange, value }) => {
  const classes = useStyles();

  const onClick = useCallback(({ target: { alt } }) => onChange(name, alt), [name, onChange]);

  return (
    <Grid container justify="center" spacing={2} className={classes.container}>
      {map(
        ({ id, avatar }) => (
          <Grid key={id}>
            <Avatar
              alt={id}
              onClick={onClick}
              name={name}
              value={value}
              className={`${classes.avatar} ${id === value ? 'selected' : ''}`}
              src={avatar}
            />
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
