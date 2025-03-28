/*import { createContext, useContext, useState, useEffect } from "react";


const AuthContext = createContext();

export const AuthProvider= ({ children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
      setUser(storedUser);
      setLoading(false);

  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(user);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{!loading ? children : <p>Cargando...</p>}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);*/

import { createContext, useContext, useState, useEffect } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const datosUser = localStorage.getItem("user");
    setUser(datosUser)
    setLoading(false);
  }, []);


 
  
  const login = (user) => {
    const userObj = {
      username : user.hashedUser,
      password: user.hashedPasssword,
      role: user.role 
    }
    setUser(userObj);
    localStorage.setItem("user",(userObj));
  };

  const logout = () => {
    console.log("llegue aqui")
    setUser(null);
    localStorage.removeItem("user");
    localStorage.clear();
  
  };

 

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{!loading ? children : <p>Cargando...</p>}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);