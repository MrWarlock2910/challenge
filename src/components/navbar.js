import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


const Navbar = () => {
  const timeFrames = ['1h', '24h', '30d', '60d'];
  const [selectedTime, setSelectedTime] = useState(0);

  const handleTimeChange = (value) => {
    setSelectedTime(value);

  };

  const calculateSliderPosition = () => {
    const sliderWidth = 100; 
    const stepCount = timeFrames.length - 1;
    const stepWidth = sliderWidth / stepCount;
    return stepWidth * selectedTime;
  };

  return (
    <div className="navbar">
      <div className="left-section">
        <span className="competition-title">Summer Referral Competition</span>
      </div>
      <div className="right-section">
        <div className="timeline-container">
          <div className="timeline-box">

            
            <div className="timeline-item">
            <div className="active-comp-notSelected">
                  1h
                </div>
              </div>
              <div className="timeline-item">
              <div className="active-comp-notSelected">
                  24h
                </div>
              </div>
              <div className="timeline-item">
              <div className="active-comp-notSelected">
                  30d
                </div>
              </div>
              <div className="timeline-item">
                <div className="active-comp-selected">
                  60d
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
