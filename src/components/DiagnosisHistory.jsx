import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';

const VitalSignCard = ({ icon, title, value, status, unit, bgColor = "#FFE6F1" }) => {
  const isLower = status.toLowerCase() === "lower than average";
  
  return (
    <div className="bg-gray-50 p-4 rounded-xl space-y-4" style={{ backgroundColor: bgColor }}>
      <div className="flex items-center space-x-2 mb-2">
        <div className="bg-white rounded-full">
          <img src={icon} alt={title} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-600">{title}</span>
        <span className="text-2xl font-bold text-gray-900">
          {value} {unit}
        </span>
      </div>
      <div className="flex flex-row space-x-2 items-center">
        {status === "Normal" ? <></> :
         <img
         src={isLower ? "/healthcare/ArrowDown.svg" : "/healthcare/ArrowUp.svg"}
         alt={isLower ? "Lower" : "Higher"}
       />
        }
       
        <div className="text-sm text-gray-600 mt-1">{status}</div>
      </div>
    </div>
  );
};


const DiagnosisHistory = ({ diagnosisHistory }) => {
  const [selectedMonth, setSelectedMonth] = useState('March');
  const [selectedData, setSelectedData] = useState(diagnosisHistory.find(item => item.month === 'March'));

  const handleMonthChange = (e) => {
    const selected = e.target.value;
    setSelectedMonth(selected);
    const selectedDiagnosis = diagnosisHistory.find(item => item.month === selected);
    setSelectedData(selectedDiagnosis);
  };

  const handleChartClick = (data) => {
    const monthData = diagnosisHistory.find(item => item.month === data.activeLabel.split(' ')[0] && item.year === parseInt(data.activeLabel.split(' ')[1]));
    setSelectedData(monthData);
    setSelectedMonth(monthData.month);
  };

  const chartData = diagnosisHistory.map(item => ({
    month: `${item.month} ${item.year}`,
    systolic: item.blood_pressure.systolic.value,
    diastolic: item.blood_pressure.diastolic.value
  }));

  return (
    <div className="p-6 bg-white rounded-lg   ">
      <div className="mb-6 space-y-5">
        <h2 className="text-xl font-extrabold mb-4">Diagnosis History</h2>

        <div className='flex flex-col lg:flex-row items-center rounded-xl space-x-4 ' style={{backgroundColor:'#F4F0FE'}}>
          <div className="p-4 rounded-lg w-full  ">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Blood Pressure</span>
              <select
                className="text-sm p-1"
                style={{backgroundColor:'#F4F0FE'}}
                value={selectedMonth}
                onChange={handleMonthChange}
              >
                {diagnosisHistory.map(item => (
                  <option key={item.month + item.year} value={item.month}>{`${item.month} ${item.year}`}</option>
                ))}
              </select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} onClick={(data)=> { console.log("clicked"); handleChartClick(data) }} style={{ backgroundColor: '#F4F0FE', borderRadius: '8px', padding: '16px' }}>
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" tick={{ fontSize: 12 }} />
                  <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }} />
                  <CartesianGrid strokeDasharray="0" stroke="#E5E7EB" horizontal={true} vertical={false} />
                  <Line type="monotone" dataKey="systolic" stroke="#E66FD2" strokeWidth={2} dot={{ fill: '#E66FD2', strokeWidth: 2 }} />
                  <Line type="monotone" dataKey="diastolic" stroke="#8C6FE6" strokeWidth={2} dot={{ fill: '#8C6FE6', strokeWidth: 2 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="w-full lg:w-2/6 flex flex-row lg:flex-col justify-around lg:justify-normal pb-5 lg:space-y-5">
  {/* Systolic Section */}
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E66FD2' }}></div>
      <span className="text-sm text-gray-600">Systolic</span>
    </div>
    <div className="text-xl font-bold">{selectedData.blood_pressure.systolic.value}</div>
    <div className="flex flex-row space-x-2">
      {selectedData.blood_pressure.systolic.levels.toLowerCase() === "higher than average" && (
        <img src="/healthcare/ArrowUp.svg" alt="Arrow Up" />
      )}
      {selectedData.blood_pressure.systolic.levels.toLowerCase() === "lower than average" && (
        <img src="/healthcare/ArrowDown.svg" alt="Arrow Down" />
      )}
      <div className="text-xs text-gray-500">{selectedData.blood_pressure.systolic.levels}</div>
    </div>
  </div>
  <div className="h-px bg-gray-300 mr-2 w-7/8"></div>

  {/* Diastolic Section */}
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#8C6FE6' }}></div>
      <span className="text-sm text-gray-600">Diastolic</span>
    </div>
    <div className="text-xl font-bold">{selectedData.blood_pressure.diastolic.value}</div>
    <div className="flex flex-row space-x-2">
      {selectedData.blood_pressure.diastolic.levels.toLowerCase() === "higher than average" && (
        <img src="/healthcare/ArrowUp.svg" alt="Arrow Up" />
      )}
      {selectedData.blood_pressure.diastolic.levels.toLowerCase() === "lower than average" && (
        <img src="/healthcare/ArrowDown.svg" alt="Arrow Down" />
      )}
      <div className="text-xs text-gray-500">{selectedData.blood_pressure.diastolic.levels}</div>
    </div>
  </div>
</div>
</div>

        {/* Vital Signs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <VitalSignCard
            icon="/healthcare/respiratory_rate.svg"
            title="Respiratory Rate"
            value={selectedData.respiratory_rate.value}
            unit="bpm"
            status={selectedData.respiratory_rate.levels}
            bgColor='#E0F3FA'
            lower={false}
          />

          <VitalSignCard
            icon="/healthcare/temperature.svg"
            title="Temperature"
            value={selectedData.temperature.value}
            unit="°F"
            status={selectedData.temperature.levels}
            bgColor='#FFE6E9'
            lower={false}
          />

          <VitalSignCard
            icon="/healthcare/HeartBPM.svg"
            title="Heart Rate"
            value={selectedData.heart_rate.value}
            unit="bpm"
            status={selectedData.heart_rate.levels}
            bgColor='#FFE6F1'
            lower={true}
          />
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
