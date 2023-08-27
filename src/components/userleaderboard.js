import React from 'react';


const UserLeaderboard = () => {
  return (
    <div className="traffic-container">
      <h1>User leaderboard</h1>
      <div className='table'>
      <div className="separator"></div>
      <div className="table-row">
        <div>Email</div>
        <div>Friends Invited</div>
        <div>Country</div>
      </div>
      <div className="separator"></div>
      <div className="table-row">
        <div>paula.suarze@con...es</div>
        <div>6,500</div>
        <div>USA</div>
      </div> 
      <div className="table-row">
        <div>laura.kenet..3@yahoo.com</div>
        <div>2,300</div>
        <div>Monaco</div>
      </div>
      <div className="table-row">
        <div>aaron.michael@arg.org</div>
        <div>1,200</div>
        <div>Prague</div>
      </div>
      <div className="table-row">
        <div>jeremy.runner@aol.com</div>
        <div>900</div>
        <div>China</div>
      </div>
      <div className="separator"></div>
      </div>
      <div className="see-leaderboard">
        <button className="see-button">See leaderboard</button>
        <span className="tooltip">Click to see the complete leaderboard</span>
      </div>
    </div>
  );
};

export default UserLeaderboard;
