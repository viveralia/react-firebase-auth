import React, { useContext } from "react";

import { Snackbar } from "@material-ui/core";

import MainContext from "../context";

const Feedback = () => {
  const { feedback, setFeedback } = useContext(MainContext);

  if (!feedback) return null;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={Boolean(feedback)}
      autoHideDuration={6000}
      onClose={() => setFeedback(null)}
      message={feedback}
    />
  );
};

export default Feedback;
