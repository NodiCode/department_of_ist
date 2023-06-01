import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, token, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} token={token} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;