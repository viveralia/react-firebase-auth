import React, { createContext, useState, useEffect, useMemo } from "react";

import { restoreSession } from "../firebase";

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    restoreSession((activeSession) => {
      if (!activeSession) {
        setUser(null);
      } else {
        setUser({ email: activeSession.email });
      }
    });
  }, []);

  const store = useMemo(() => {
    return {
      user,
      setUser,
      feedback,
      setFeedback,
    };
  }, [feedback, user]);

  return (
    <MainContext.Provider value={{ ...store }}>{children}</MainContext.Provider>
  );
};

export default MainContext;
