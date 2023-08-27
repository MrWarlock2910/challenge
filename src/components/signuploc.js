import React from 'react';
import ReactCountryFlag from 'react-country-flag';

const SignupLocation = () => {
  return (
    <div className="traffic-container">
      <div className="traffic-header">
        <h1 className="bar-title">Signup Location</h1>
        <div className="timeline-container">
          <div className="timeline-box">
            <div className="timeline-item">
            <div className="active-comp-selected">
                  Country
                </div>
              </div>
              <div className="timeline-item">
              <div className="active-comp-notSelected">
                  City
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="traffic-content">
        <div className="traffic-item">
          <div className="traffic-bar">
            <div className="bar-title-overlay">
              <ReactCountryFlag countryCode="US" svg title="United States" className="flag" />
              United States
            </div>
            <div className="traffic-fill" style={{ width: '60%' }}></div>
          </div>
          <div className="traffic-value">30,000</div>
        </div>
        <div className="traffic-item">
          <div className="traffic-bar">
            <div className="bar-title-overlay">
              <ReactCountryFlag countryCode="DE" svg title="Germany" className="flag" />
              Germany
            </div>
            <div className="traffic-fill" style={{ width: '40%' }}></div>
          </div>
          <div className="traffic-value">20,000</div>
        </div>
        <div className="traffic-item">
          <div className="traffic-bar">
            <div className="bar-title-overlay">
              <ReactCountryFlag countryCode="NL" svg title="Netherlands" className="flag" />
              Netherlands
            </div>
            <div className="traffic-fill" style={{ width: '20%' }}></div>
          </div>
          <div className="traffic-value">10,000</div>
        </div>
        <div className="traffic-item">
          <div className="traffic-bar">
            <div className="bar-title-overlay">
              <ReactCountryFlag countryCode="IN" svg title="India" className="flag" />
              India
            </div>
            <div className="traffic-fill" style={{ width: '10%' }}></div>
          </div>
          <div className="traffic-value">5,000</div>
        </div>
        <div className="traffic-item">
          <div className="traffic-bar">
            <div className="bar-title-overlay">
              <ReactCountryFlag countryCode="JP" svg title="Japan" className="flag" />
              Japan
            </div>
            <div className="traffic-fill" style={{ width: '6%' }}></div>
          </div>
          <div className="traffic-value">3,000</div>
        </div>
        <div className="traffic-item">
          <div className="traffic-bar">
            <div className="bar-title-overlay">
              <ReactCountryFlag svg title="Globe" className="flag" />
              Other
            </div>
            <div className="traffic-fill" style={{ width: '4%' }}></div>
          </div>
          <div className="traffic-value">2,000</div>
        </div>
      </div>
      <div className="see-traffic">
        <button className="see-button">See Signup Locations</button>
        <span className="tooltip">Click to see the complete signup locations</span>
      </div>
    </div>
  );
};

export default SignupLocation;
