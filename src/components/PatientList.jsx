import React from 'react';
import { Search } from 'lucide-react';
import Layer2 from '../assets/healthcare/Layer_12.png'
const PatientList = () => {
  const patients = [
    { id: 1, name: 'Emily Williams', gender: 'Female', age: 18, imageUrl: '/healthcare/Layer_1.png' },
    { id: 2, name: 'Ryan Johnson', gender: 'Male', age: 45, imageUrl: '/healthcare/Layer_2.png' },
    { id: 3, name: 'Brandon Mitchell', gender: 'Male', age: 36, imageUrl: '/healthcare/Layer_5.png' },
    { id: 4, name: 'Jessica Taylor', gender: 'Female', age: 28, imageUrl: '/healthcare/Layer_6.png' },
    { id: 5, name: 'Samantha Johnson', gender: 'Female', age: 56, imageUrl: '/healthcare/Layer_7.png' },
    { id: 6, name: 'Ashley Martinez', gender: 'Female', age: 54, imageUrl: '/healthcare/Layer_8.png' },
    { id: 7, name: 'Olivia Brown', gender: 'Female', age: 32, imageUrl: '/healthcare/Layer_9.png' },
    { id: 8, name: 'Tyler Davis', gender: 'Male', age: 19, imageUrl: '/healthcare/Layer_10.png' },
    { id: 9, name: 'Kevin Anderson', gender: 'Male', age: 30, imageUrl: '/healthcare/Layer_12.png' },
    { id: 10, name: 'Dylan Thompson', gender: 'Male', age: 36, imageUrl: '/healthcare/Layer_1.png' },
    { id: 11, name: 'Nathan Evans', gender: 'Male', age: 58, imageUrl: '/healthcare/Layer_2.png' },
    { id: 12, name: 'Mike Nolan', gender: 'Male', age: 31, imageUrl: '/healthcare/Layer_5.png' },
    // Added more patients to demonstrate scroll
    { id: 13, name: 'Sarah Parker', gender: 'Female', age: 42, imageUrl: '/healthcare/Layer_6.png' },
    { id: 14, name: 'James Wilson', gender: 'Male', age: 29, imageUrl: '/healthcare/Layer_7.png' },
    { id: 15, name: 'Emma Davis', gender: 'Female', age: 35, imageUrl: '/healthcare/Layer_8.png' },
    { id: 9, name: 'Kevin Anderson', gender: 'Male', age: 30, imageUrl: '/healthcare/Layer_8.png' },
    { id: 10, name: 'Dylan Thompson', gender: 'Male', age: 36, imageUrl: '/healthcare/Layer_10.png' },
    { id: 11, name: 'Nathan Evans', gender: 'Male', age: 58, imageUrl: '/healthcare/Layer_12.png' },
    { id: 12, name: 'Mike Nolan', gender: 'Male', age: 31, imageUrl: '/healthcare/Layer_1.png' },
    // Added more patients to demonstrate scroll
    { id: 13, name: 'Sarah Parker', gender: 'Female', age: 42, imageUrl: '/healthcare/Layer_2.png' },
    { id: 14, name: 'James Wilson', gender: 'Male', age: 29, imageUrl: '/healthcare/Layer_5.png' },
    { id: 15, name: 'Emma Davis', gender: 'Female', age: 35, imageUrl: '/healthcare/Layer_6.png' },
  ];

  return (
    <div className=" h-svh flex flex-col    mx-2 bg-white rounded-xl  ">
      {/* Fixed Header Section */}
      <div className="flex justify-between items-center p-4    flex-row  ">
        <h1 className="text-xl font-extrabold  ">Patients</h1>
        <img src='/healthcare/search_FILL0.svg'></img>
      </div>

      {/* Scrollable Patient List */}
      <div className="flex-1 overflow-y-auto scrollbar-custom">
        <div className=" space-y-2">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className={`p-4 flex items-center justify-between   cursor-pointer transition-colors ${
                patient.name === 'Jessica Taylor' ? 'bg-lightGreenBg' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <img
                  src={patient.imageUrl}
                  alt={patient.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-bold text-sm">{patient.name}</h3>
                  <p className="text-xs text-lightGrayText">
                    {patient.gender}, {patient.age}
                  </p>
                </div>
              </div>
              
              <img src='/healthcare/more_horiz_FILL0.svg'></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientList;