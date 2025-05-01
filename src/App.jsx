import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './assets/Html/Login'; 
import SignUp from './assets/Html/SignUp';
import HomePage from './assets/Html/Homepage';
import TopicInputForm from './assets/Html/TopicInputForm';
import LearningPath from './assets/Html/LearningPath';
import CopyDownloadPlan from './assets/Html/CopyDownloadPlan';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />     
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/TopicInputForm" element={<TopicInputForm />}/>
        <Route path="/LearningPath" element={<LearningPath/>}/>
        <Route path="/CopyDownloadPlan" element={<CopyDownloadPlan/>}></Route>
      </Routes>
    </Router>
  );
};
export default App;
