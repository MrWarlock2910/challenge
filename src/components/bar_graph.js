import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    { week: '', signups: 1300 },
    { week: '', signups: 1400 },
    { week: '', signups: 1500},
    { week: '', signups: 1605 },
    { week: '', signups: 1600 },
    { week: '', signups: 1700 },
    { week: '', signups: 1900 },
    { week: '', signups: 2100 },
    { week: '', signups: 2400 },
    { week: '', signups: 2900 },
    { week: '', signups: 3200 },
    { week: '', signups: 3100 },
    { week: '', signups: 3900 },
    { week: '', signups: 4400 },
    { week: '', signups: 5300 },
    { week: '', signups: 5900 },
    { week: '', signups: 5700 },
    { week: '', signups: 6050 },
    { week: '', signups: 7000 },
    { week: '', signups: 8000 },
    { week: '', signups: 9050 },
    { week: '', signups: 10500 },
    { week: '', signups: 11000 },
    { week: '', signups: 13000 },
    { week: '', signups: 15000 },
    { week: '', signups: 16000 },
    { week: '', signups: 18000 },
    { week: '', signups: 19000 },
    { week: '', signups: 22000 },
    { week: '', signups: 13000 },
    { week: '', signups: 16000 },
    { week: '', signups: 12000 },
    { week: '', signups: 8000 },
    { week: '', signups: 10000 },
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
