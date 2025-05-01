import React from 'react';
const LearningPath = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-header">AI-Generated Learning Path</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }} border="1">
          <thead style={{ backgroundColor: '#3AAFA9', color: 'white' }}>
            <tr>
              <th>Step</th>
              <th>Title</th>
              <th>Resource</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Introduction to Python</td>
              <td><a href="https://www.python.org/doc/" target="_blank">Visit</a></td>
            </tr>
            {/* Add more rows dynamically */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default LearningPath;
