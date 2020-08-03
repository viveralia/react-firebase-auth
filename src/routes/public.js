import React, { Fragment } from "react";

import { Route, Redirect } from "react-router-dom";

import publicRoutes from "../constants/public-routes";

const PublicRoutes = () => {
  return (
    <Fragment>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
      <Redirect from="/" to="/signin" />
    </Fragment>
  );
};

export default PublicRoutes;
