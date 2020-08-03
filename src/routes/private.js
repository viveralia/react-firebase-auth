import React, { Fragment } from "react";

import { Route, Redirect } from "react-router-dom";

import privateRoutes from "../constants/private-routes";

const PrivateRoutes = () => {
  return (
    <Fragment>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
      <Redirect from="/" to="/profile" />
    </Fragment>
  );
};

export default PrivateRoutes;
