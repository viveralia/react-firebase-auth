import React, { useContext } from "react";

import { Button, Typography } from "@material-ui/core";

import MainContext from "../context";
import { signout } from "../firebase";

const Profile = () => {
  const { user, setUser } = useContext(MainContext);

  const handleClick = async () => {
    await signout();
    setUser(null);
  };

  return (
    <div>
      <Typography component="h1" variant="h4">
        Welcome{" "}
        <Typography component="span" color="primary">
          {user.email}
        </Typography>
      </Typography>
      <Button variant="outlined" color="primary" onClick={handleClick}>
        Log out
      </Button>
    </div>
  );
};

export default Profile;
