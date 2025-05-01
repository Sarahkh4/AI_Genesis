import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Login.css';
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-header">AI Genesis - Home</h2>
        <div className="form-group">
          <button className="submit-btn" onClick={() => navigate('/TopicInputForm')}>
            Go to Topic Input Form
          </button>
        </div>
        <div className="form-group">
          <button className="submit-btn" onClick={() => navigate('/LearningPath')}>
            View Learning Path
          </button>
        </div>
        <div className="form-group">
          <button className="submit-btn" onClick={() => navigate('/CopyDownloadPlan')}>
            Copy / Download Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
