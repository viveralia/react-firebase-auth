import React from "react";

import { LinearProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  linear: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
  },
});

const Loader = () => {
  const classes = useStyles();

  return <LinearProgress className={classes.linear} />;
};

export default Loader;
