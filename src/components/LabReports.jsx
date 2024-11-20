import React, { useState } from 'react';
import { Download } from 'lucide-react';

const LabReports = () => {
  const [selectedId, setSelectedId] = useState(1);

  const labResults = [
    { name: 'Blood Tests', id: 1, date: '2024-03-15' },
    { name: 'CT Scans', id: 2, date: '2024-03-10' },
    { name: 'Radiology Reports', id: 3, date: '2024-03-05' },
    { name: 'X-Rays', id: 4, date: '2024-02-28' },
    { name: 'Urine Test', id: 5, date: '2024-02-20' },
    { name: 'MRI Scan', id: 6, date: '2024-02-15' },
    { name: 'ECG Report', id: 7, date: '2024-02-10' },
    { name: 'Cholesterol Panel', id: 8, date: '2024-02-05' },
    { name: 'Hormone Panel', id: 9, date: '2024-01-30' },
    { name: 'Thyroid Function', id: 10, date: '2024-01-25' }
  ];

  return (
    <div className="w-full max-w-sm bg-white shadow-sm p-5 rounded-xl">
      <div className="pb-2">
        <div className="text-[24px] font-extrabold text-gray-900">Lab Results</div>
      </div>
    
        <div className="h-64 overflow-y-auto pr-2 scrollbar-custom">
          {labResults.map((result) => (
            <div 
              key={result.id}
              onClick={() => setSelectedId(result.id)}
              className={`flex items-center justify-between py-2 px-2 rounded-md cursor-pointer mb-1 ${
                selectedId === result.id ? 'bg-lightGray' : ''
              }`}
            >
              <div className="flex flex-col">
                <span className="text-sm text-gray-600">{result.name}</span>
              </div>
              <button 
                className="p-1 text-darkGray hover:bg-gray-100 rounded-full"
                aria-label={`Download ${result.name}`}
              >
                <img src='/healthcare/download_FILL0.svg'></img>
              </button>
            </div>
          ))}
        </div>
 
    </div>
  );
};

export default LabReports;