import React, { useState } from 'react';

const LabReports = ({ labResults }) => {
  const [selectedResult, setSelectedResult] = useState(null);

  return (
    <div className="w-full bg-white shadow-sm p-5 rounded-xl">
      <div className="pb-2">
        <div className="text-[24px] font-extrabold text-gray-900">Lab Results</div>
      </div>
      <div className="h-64 overflow-y-auto pr-2 scrollbar-custom">
        {labResults.map((result, index) => (
          <div
            key={index}
            onClick={() => setSelectedResult(result)}
            className={`flex items-center justify-between py-2 px-2 rounded-md cursor-pointer mb-1 ${
              selectedResult === result ? 'bg-lightGray' : ''
            }`}
          >
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">{result}</span>
            </div>
            <button
              className="p-1 text-darkGray hover:bg-gray-100 rounded-full"
              aria-label={`Download ${result}`}
            >
              <img src="/healthcare/download_FILL0.svg" alt={`Download ${result}`} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabReports;
