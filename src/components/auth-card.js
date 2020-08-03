import React from "react";

import { Box, Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    maxWidth: 400,
  },
});

const AuthCard = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Card variant="outlined" className={classes.card}>
        {children}
      </Card>
    </Box>
  );
};

export default AuthCard;
