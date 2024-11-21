import React from 'react';

const DiagnosticList = ({diagnosticList}) => {
  console.log(diagnosticList, "diagnosticList");

  return (
    <div className="bg-white shadow-sm p-5 rounded-xl space-y-5   ">
      <div className="pb-2">
        <div className="text-[24px] font-extrabold text-darkGray">Diagnostic List</div>
      </div>
      <div className='space-y-4'>
        <div className="bg-lightGray rounded-full p-4">
          <div className="grid grid-cols-[1fr_2fr_1fr]">
            <div className="text-xs font-medium text-darkGray uppercase">Problem/Diagnosis</div>
            <div className="text-xs font-medium text-darkGray uppercase">Description</div>
            <div className="text-xs font-medium text-darkGray uppercase">Status</div>
          </div>
        </div>
        {/* Ensure this container is scrollable */}
        <div className="h-40 overflow-y-auto scrollbar-custom">
          {diagnosticList.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[1fr_2fr_1fr] px-4 py-3 border-b last:border-none"
            >
              <div className="text-sm text-darkGray">{item.name}</div>
              <div className="text-sm text-darkGray">{item.description}</div>
              <div className="text-sm text-darkGray">{item.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticList;
