import React from 'react';

function ProgressSummary({ complete }) {
  const completedCount = complete.filter(hoLa => hoLa).length;
  const totalCount = complete.length;
  const progress = Math.floor((completedCount / totalCount)*100);
 
  return (
    <div className="text-center mt-4">
      <p className=' text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:text-blue-800 ms-2'><b>{progress}% Completed</b></p>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
              Progress
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-blue-600">
              {completedCount}/{totalCount}
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">         
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressSummary;