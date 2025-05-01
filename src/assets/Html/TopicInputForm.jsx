import React, { useState } from 'react';
import '../CSS/Login.css';
const TopicInputForm = () => {
  const [topic, setTopic] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Generating path for:', topic);
  };
  return (
    <div className="page-container">
      <div className="card-box">
        <h2 className="section-header" style={{textAlign:'center'}}>Enter a Topic</h2>
        <form onSubmit={handleSubmit}>
        <table style={{ border:'2px',width:'50%',position:'relative',top:'300px',left:'300px'}}>
            <tbody>
              <tr className="form-group">
                <td style={{ width: '30%', height:'70%'}}>
                  <label className="label">Topic:</label>
                </td>
                <td>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="e.g. React, Python"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" style={{ textAlign: 'center', paddingTop: '1rem',width:'50px' }}>
                  <button className="submit-btn" type="submit">
                    Generate Plan
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};
export default TopicInputForm;
