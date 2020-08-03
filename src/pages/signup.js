import React, { Fragment, useState, useContext } from "react";

import {
  Box,
  Button,
  CardContent,
  CardHeader,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import { signup } from "../firebase";
import MainContext from "../context";
import Loader from "../components/loader";
import AuthCard from "../components/auth-card";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser, setFeedback } = useContext(MainContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { user } = await signup(email, password);
      setUser({ email: user.email });
    } catch (error) {
      setFeedback(error.message);
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Fragment>
      {loading && <Loader />}
      <AuthCard>
        <form onSubmit={handleSubmit}>
          <CardHeader title="Sign Up" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="email"
                  type="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="password"
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Box textAlign="right" marginTop="1rem" marginBottom="1rem">
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Sign up
              </Button>
            </Box>
            <Typography align="center" color="textSecondary">
              Already have an account?{" "}
              <Link component={RouterLink} to="/signin">
                Sign in
              </Link>
            </Typography>
          </CardContent>
        </form>
      </AuthCard>
    </Fragment>
  );
};

export default Signup;
