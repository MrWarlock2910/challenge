import React from 'react';

const Behaviour = () => {
  return (
    <div className="traffic-container">
      <div className="traffic-header">
        <h1 className="bar-title">Behaviour</h1>
        <div className="timeline-container">
          <div className="timeline-box">
            <div className="timeline-item">
            <div className="active-comp-selected">
                  Browsers
                </div>
              </div>
              <div className="timeline-item">
              <div className="active-comp-notSelected">
                  Decides
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="traffic-content">
        <div className="traffic-item">
          <div className="traffic-bar">
            <div className="bar-title-overlay">United States</div>
            <div className="traffic-fill" style={{ width: '60%' }}></div>
          </div>
          <div className="traffic-value">30,000</div>
        </div>
        <div className="traffic-item">
          <div className="traffic-bar">
            <div className="bar-title-overlay">Germany</div>
            <div className="traffic-fill" style={{ width: '40%' }}></div>
          </div>
          <div className="traffic-value">20,000</div>
        </div>
        <div className="traffic-item">
          <div className="traffic-bar">
            <div className="bar-title-overlay">Netherlands</div>
            <div className="traffic-fill" style={{ width: '20%' }}></div>
          </div>
          <div className="traffic-value">10,000</div>
        </div>
        <div className="traffic-item">
          <div className="traffic-bar">
            <div className="bar-title-overlay">India</div>
            <div className="traffic-fill" style={{ width: '10%' }}></div>
          </div>
          <div className="traffic-value">5,000</div>
        </div>
        <div className="traffic-item">
          <div className="traffic-bar">
            <div className="bar-title-overlay">Japan</div>
            <div className="traffic-fill" style={{ width: '6%' }}></div>
          </div>
          <div className="traffic-value">3,000</div>
        </div>
        <div className="traffic-item">
          <div className="traffic-bar">
            <div className="bar-title-overlay">Other</div>
            <div className="traffic-fill" style={{ width: '4%' }}></div>
          </div>
          <div className="traffic-value">2,000</div>
        </div>
      </div>
      <div className="see-traffic">
        <button className="see-button">See Behaviour</button>
        <span className="tooltip">Click to see the complete behaviour data</span>
      </div>
    </div>
  );
};

export default Behaviour;
