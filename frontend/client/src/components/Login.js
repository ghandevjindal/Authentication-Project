import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  // State to store email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      const token = response.data.token; // Extract token from response

      // Store the token in localStorage
      localStorage.setItem("token", token);
  
      // Show success toast
      toast.success("Login Successful!", {
        position: "top-right", // ✅ Use a string directly instead of `toast.POSITION.TOP_RIGHT`
      });

      navigate("/home");
  
    } catch (error) {
      // Show error toast
      toast.error(error.response?.data?.message || "Login failed!", {
        position: "top-right", // ✅ Use a string
      });
    }
  };
  

  return (
    <div className="container mt-5">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">Login</h1>
          <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
