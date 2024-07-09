import React from 'react';

const DashboardBasic = () => {
  const date = new Date();
  return (
    <div className='flex flex-col'>
      <div className='bg-orange-500 h-1/4 mb-10 relative'>
        <h1 className='uppercase w-full h-40 font-bold p-6'>
          Dashboard Basic Setting
        </h1>
      </div>
      <div className='bg-white h-96 relative  ml-12' style={{ marginTop: '-6rem',width: '70rem' }}>
        <div className='flex justify-between m-2'>
          <h1 className='text-2xl font-bold'>Pending Quiz Test </h1>
          <button className='bg-gray-800 text-white w-24'>New</button>
        </div>
        <div className='bg-slate-200 m-4 h-24'>
          <h1 className='text-xl font-bold uppercase h-10 m-4'>Developer Quiz</h1>
          <div className='flex justify-between text-xl m-4'>
            <h1>
              Subject-Maths
            </h1>
            {date.toLocaleDateString()} {/* Display the current date */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBasic;