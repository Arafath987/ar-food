"use client";
const { createContext, useState } = require("react");
import axios from "axios";

const endPoint = process.env.NEXT_PUBLIC_API_BASE;

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const login = async (email, password) => {
    const { data } = axios.post(endPoint + "/api/login", {
      email,
      password,
    });
    console.log(data);
  };

  const logOut = async () => {};

  const value = {
    login,
    user,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
