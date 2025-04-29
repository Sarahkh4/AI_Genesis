import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../CSS/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-header">Login</h2>
        <form className="space-y-5">
          <div className="form-group">
            <label className="label">Email</label>
            <input
              type="email"
              className="input-field"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <input
              type="password"
              className="input-field"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </form>
        <p className="sign-up-link">
          Don’t have an account? <Link to="/signup" className="text-[#3AAFA9] font-medium hover:underline">SignUp</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
