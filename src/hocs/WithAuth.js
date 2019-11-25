import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export default ({ children }) => {
  const { pathname } = useLocation();

  const isAuthenticated = useMemo(() => pathname !== '/login' && localStorage.getItem('token'), [
    pathname,
  ]);

  return isAuthenticated ? children : null;
};
