import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './assets/Html/Login'; 
import SignUp from './assets/Html/SignUp';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />      {/* Login page */}
        <Route path="/signup" element={<SignUp />} /> {/* SignUp page */}
      </Routes>
    </Router>
  );
};
export default App;
