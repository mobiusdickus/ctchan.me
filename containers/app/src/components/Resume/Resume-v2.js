import React from 'react';

import './Resume-v2.css';

function ResumeV2() {
  return (
    <div className="container">
      <div className="title">
        <h1>Resume</h1>
      </div>
      <div className="container-column">
        <div className="item1"><p>Column</p></div>
        <div className="item1"><p>Column</p></div>
        <div className="item1"><p>Column</p></div>
      </div>
      <div className="container-row">
        <div className="item2"><p>Row</p></div>
        <div className="item2"><p>Row</p></div>
        <div className="item2"><p>Row</p></div>
      </div>
      <div className="container-column">
        <div className="item1"><p>Column</p></div>
        <div className="item1"><p>Column</p></div>
        <div className="item1"><p>Column</p></div>
      </div>
      <div className="container-row">
        <div className="item2"><p>Row</p></div>
        <div className="item2"><p>Row</p></div>
        <div className="item2"><p>Row</p></div>
      </div>
    </div>
  );
};

export default ResumeV2;
