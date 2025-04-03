import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

export const isAuthenticated = async () => {
    const token = localStorage.getItem("token");
  
    if (!token) return false;
  
    try {
      const response = await axios.get("http://localhost:5000/api/auth/validate-token", {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      return response.data.valid; // Backend returns { valid: true } if token is valid
    } catch (error) {
      localStorage.removeItem("token"); // Remove invalid token
      return false;
    }
};

const ProtectedRoute = () => {
    const [auth, setAuth] = useState(null);
  
    useEffect(() => {
      const checkAuth = async () => {
        const valid = await isAuthenticated();
        setAuth(valid);
      };
  
      checkAuth();
    }, []);
  
    if (auth === null) return <p>Loading...</p>; // Show a loading message while checking
  
    return auth ? <Outlet /> : <Navigate to="/login" />;
  };
  
  export default ProtectedRoute;
