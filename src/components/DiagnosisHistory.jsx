import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { month: 'Oct 2023', systolic: 120, diastolic: 110 },
  { month: 'Nov 2023', systolic: 115, diastolic: 75 },
  { month: 'Dec 2023', systolic: 170, diastolic: 110 },
  { month: 'Jan 2024', systolic: 115, diastolic: 90 },
  { month: 'Feb 2024', systolic: 150, diastolic: 75 },
  { month: 'Mar 2024', systolic: 155, diastolic: 78 }
];

const VitalSignCard = ({ icon, title, value, status, unit, bgColor = "#FFE6F1", lower }) => (
  <div className="bg-gray-50 p-4 rounded-lg space-y-4" style={{ backgroundColor: bgColor }}>
    <div className="flex items-center space-x-2 mb-2">
      <div className=' bg-white rounded-full'>
        <img src={icon}></img>
      </div>


    </div>
    <div className='flex flex-col'>
      <span className="text-gray-600">{title}</span>
      <span className="text-2xl font-bold text-gray-900">{value} {unit}</span>
    </div>

    <div className='flex flex-row space-x-2 items-center'>
      {lower == true ?
        <img src='/healthcare/ArrowDown.svg'></img> : <></>}

      <div className="text-sm text-gray-600 mt-1">{status}</div>
    </div>

  </div>
);

const DiagnosisHistory = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow ">
      <div className="mb-6 space-y-4">
        <h2 className="text-xl font-semibold mb-4">Diagnosis History</h2>

        {/* Blood Pressure Graph */}
        <div className='flex flex-row   rounded-xl  space-x-4' style={{backgroundColor:'#F4F0FE'}}>
          <div className=" p-4 rounded-lg mb-6  w-3/4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Blood Pressure</span>
              <select className="text-sm   p-1 " style={{backgroundColor:'#F4F0FE'}}>
                <option>Last 6 months</option>
              </select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}
                 style={{ backgroundColor: '#F4F0FE', borderRadius: '8px', padding: '16px' }} // Background color and padding
                >
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 12 }}
                    stroke="#9CA3AF"
                  />
                  <YAxis
                    stroke="#9CA3AF"
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
                  />
                  <CartesianGrid
                    strokeDasharray="0" // Set to "0" for solid lines, "3 3" for dashed lines
                    stroke="#E5E7EB" // Customize the color of the grid lines
                    horizontal={true} // Enable horizontal grid lines
                    vertical={false} // Disable vertical grid lines
                  />
                  <Line
                    type="monotone"
                    dataKey="systolic"
                    stroke="#E66FD2"
                    strokeWidth={2}
                    dot={{ fill: '#E66FD2', strokeWidth: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="diastolic"
                    stroke="#8C6FE6"
                    strokeWidth={2}
                    dot={{ fill: '#8C6FE6', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>


          </div>
          <div className="mt-4  flex-1 flex-col  gap-4 space-y-4">
            <div className='space-y-2'>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full " style={{ backgroundColor: '#E66FD2' }}></div>
                <span className="text-sm text-gray-600">Systolic</span>
              </div>
              <div className="text-xl font-bold">160</div>
              <div className='flex flex-row space-x-2  '>
                <img src='/healthcare/ArrowUp.svg'></img>
                <div className="text-xs text-gray-500"> Higher than Average</div>
              </div>

            </div>
            <div className=' h-px bg-gray-300 mr-2'></div>
            <div className='space-y-2'>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full " style={{ backgroundColor: '#8C6FE6' }}></div>
                <span className="text-sm text-gray-600">Diastolic</span>
              </div>
              <div className="text-xl font-bold">78</div>
              <div className='flex flex-row space-x-2  '>
                <img src='/healthcare/ArrowUp.svg'></img>
                <div className="text-xs text-gray-500"> Lower than Average</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vital Signs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <VitalSignCard
            icon="/healthcare/respiratory_rate.svg"
            title="Respiratory Rate"
            value="20"
            unit="bpm"
            status="Normal"
            bgColor='#E0F3FA'
            lower={false}
          />

          <VitalSignCard
            icon="/healthcare/temperature.svg"
            title="Temperature"
            value="98.6"
            unit="°F"
            status="Normal"
            bgColor='#FFE6E9'
            lower={false}
          />

          <VitalSignCard
            icon="/healthcare/HeartBPM.svg"
            title="Heart Rate"
            value="78"
            unit="bpm"
            status="Lower than Average"
            bgColor='#FFE6F1'
            lower={true}
          />
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;