import React, { useContext, Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import PublicRoutes from "./routes/public";
import PrivateRoutes from "./routes/private";
import UserContext from "./context";
import Loader from "./components/loader";
import Feedback from "./components/feedback";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <Suspense fallback={<Loader />}>
      <Feedback />
      <Router>
        <Switch>
          {user === undefined && <Loader />}
          {user === null && <PublicRoutes />}
          {user && <PrivateRoutes />}
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
