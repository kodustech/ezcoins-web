import React, { memo, useCallback, useMemo } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const WithAuthRoute = memo(({ children, notAuthenticated, ...attributes }) => {
  const isAuthenticate = notAuthenticated ^ !!localStorage.getItem('token');

  const pathname = useMemo(() => (notAuthenticated ? '/home' : 'login'), [notAuthenticated]);

  const renderRoute = useCallback(
    ({ location: from }) =>
      isAuthenticate ? (
        children
      ) : (
        <Redirect
          to={{
            pathname,
            state: {
              from,
            },
          }}
        />
      ),
    [children, isAuthenticate, pathname],
  );

  return <Route {...attributes} render={renderRoute} />;
});

WithAuthRoute.propTypes = {
  notAuthenticated: PropTypes.bool,
};

WithAuthRoute.defaultProps = {
  notAuthenticated: false,
};

export default WithAuthRoute;
