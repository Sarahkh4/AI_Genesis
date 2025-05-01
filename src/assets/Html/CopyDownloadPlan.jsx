import React from 'react';
const CopyDownloadPlan = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("Step 1: Learn Python...\nStep 2: Learn Data Science...");
    alert('Copied to clipboard!');
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob(["Step 1: Learn Python...\nStep 2: Learn Data Science..."], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "LearningPlan.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-header">Copy or Download Plan</h2>
        <pre>
{`Step 1: Learn Python Basics
Step 2: Practice coding
Step 3: Explore libraries like pandas & numpy`}
        </pre>
        <div style={{ marginTop: '1rem' }}>
          <button className="submit-btn" onClick={handleCopy}>Copy</button>
          <button className="submit-btn" onClick={handleDownload} style={{ marginTop: '0.5rem' }}>Download</button>
        </div>
      </div>
    </div>
  );
};

export default CopyDownloadPlan;
