import React from 'react';
import {Route, Redirect} from 'react-router-dom';


export const PrivateRoute = ({ component: Component, login:login, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      login ? (  <Component {...props} />) : (  <Redirect to= "/"/>)
    }
  />
);
