import React from "react";
import '../CSS/Login.css'; // Import the same CSS file for styling
import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-header">Sign Up</h2>
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
          <div className="form-group">
            <label className="label">Confirm Password</label>
            <input
              type="password"
              className="input-field"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="submit-btn"
          >
            Sign Up
          </button>
        </form>
        <p className="sign-up-link">
  Already have an account? <Link to="/" className="text-[#3AAFA9] font-medium hover:underline">Login</Link>
</p>
      </div>
    </div>
  );
};

export default SignUp;
