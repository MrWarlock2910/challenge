import React from 'react';
import BarGraph from './components/bar_graph';
import Navbar from './components/navbar';
import ZoolText from './components/zooltext';
import UserLeaderboard from './components/userleaderboard'; // Import the UserLeaderboard component
import './App.css';
import Traffic from './components/traffic';
import SignupLocation from './components/signuploc';
import Behaviour from './components/behaviour';

function App() {
  return (
    <div className="App container">
      <Navbar/>
      <div className="component-container row">
        <BarGraph/>
      </div>
      <div className='component-container row'>
        <ZoolText />
      </div>

      <div className="component-container row">
        <div className='col-6'><UserLeaderboard /></div>
        <div className='col-6'><Traffic /></div>
      </div>
      
      <div className="component-container row">
        <div className='col-6'><SignupLocation /></div>
        <div className='col-6'><Behaviour /></div>
      </div>
    </div>
  );
}

export default App;
