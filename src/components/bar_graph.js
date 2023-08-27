import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    { week: '', signups: 120 },
    { week: '', signups: 200 },
    { week: '', signups: 180 },
    { week: '', signups: 220 },
    { week: '', signups: 150 },
    { week: '', signups: 170 },
    { week: '', signups: 190 },
    { week: '', signups: 210 },
    { week: '', signups: 250 },
    { week: '', signups: 220 },
    { week: '', signups: 230 },
    { week: '', signups: 190 },
    { week: '', signups: 180 },
    { week: '', signups: 160 },
    { week: '', signups: 210 },
    { week: '', signups: 240 },
    { week: '', signups: 200 },
    { week: '', signups: 170 },
    { week: '', signups: 220 },
    { week: '', signups: 250 },
    { week: '', signups: 280 },
    { week: '', signups: 300 },
    { week: '', signups: 320 },
    { week: '', signups: 280 },
    { week: '', signups: 260 },
    { week: '', signups: 240 },
    { week: '', signups: 280 },
    { week: '', signups: 300 },
    { week: '', signups: 280 },
    { week: '', signups: 250 },
    { week: '', signups: 230 },
    { week: '', signups: 210 },
    { week: '', signups: 190 },
    { week: '', signups: 120 },
];

const BarGraph = () => {
  return (
    <div className="graph-container">
      <div className="participants">
        <img src="participant-icon.png" alt="" style={{ height:'70%', width:'5%'}}/>
        <span style={{fontSize : '60px'}}><b>100,000</b>&nbsp;<span style={{fontSize : '40px'}}>participants</span></span>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="week" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="signups" fill="#ffc658" shape={<RoundBar />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const RoundBar = (props) => {
    const { fill, x, y, width, height } = props;
    const radius = 15; // Adjust the radius as needed
    return (
      <path
        d={`M${x},${y + radius}a${radius},${radius} 0 0 1 ${radius},${-radius}h${width - 2 * radius}a${radius},${radius} 0 0 1 ${radius},${radius}v${height - 2 * radius}a${radius},${radius} 0 0 1 -${radius},${radius}h${-width + 2 * radius}a${radius},${radius} 0 0 1 -${radius},${-radius}z`}
        fill={fill}
      />
    );
  };
  

export default BarGraph;
