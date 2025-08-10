import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("https://vercel-backend-qzmr.onrender.com/check-auth", { withCredentials: true })
      .then((res) => {
        if (res.data.isLoggedIn) {
          setIsLoggedIn(true);
          setUser(res.data.user);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch((err) => console.error("Auth check failed", err));
  }, []);

  const logout = () => {
    axios.post("http://localhost:8080/logout", {}, { withCredentials: true })
      .then(() => {
        setIsLoggedIn(false);
        setUser(null);
      })
      .catch((err) => console.error("Logout failed", err));
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, setIsLoggedIn, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};