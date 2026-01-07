import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  // Load auth from localStorage if available
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token") || null,
    name: localStorage.getItem("name") || null,
    role: localStorage.getItem("role") || null,
  });

  // Redirect user automatically based on role if token exists
  useEffect(() => {
    if (auth.token && auth.role) {
      switch (auth.role.toLowerCase()) {
        case "manager":
          navigate("/manager-dashboard");
          break;
        case "cook":
          navigate("/cook-dashboard");
          break;
        case "cleaner":
          navigate("/cleaner-dashboard");
          break;
        case "hr":
          navigate("/hr-dashboard");
          break;
        default:
          navigate("/login");
      }
    }
  }, [auth, navigate]);

  // Save auth after login
  const saveAuth = (token, name, role) => {
    setAuth({ token, name, role });
    localStorage.setItem("token", token);
    localStorage.setItem("name", name);
    localStorage.setItem("role", role);

    // Redirect immediately after login
    switch (role.toLowerCase()) {
      case "manager":
        navigate("/manager-dashboard");
        break;
      case "cook":
        navigate("/cook-dashboard");
        break;
      case "cleaner":
        navigate("/cleaner-dashboard");
        break;
      case "hr":
        navigate("/hr-dashboard");
        break;
      default:
        navigate("/login");
    }
  };

  // Logout user
  const logout = () => {
    setAuth({ token: null, name: null, role: null });
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ auth, saveAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
