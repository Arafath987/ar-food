"use client";
const { createContext, useState } = require("react");

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const login = async (email, password) => {};

  const logOut = async () => {};

  const value = {
    login,
    user,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
