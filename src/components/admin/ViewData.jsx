import React from 'react';

const ViewData = () => {
  return (
    <div className='flex flex-col'>
      <div className='bg-orange-500 h-1/4 mb-10 relative'>
        <h1 className='uppercase w-full h-40 font-bold p-6'>
          View Data
        </h1>
      </div>

      <div className='bg-white h-96 relative ml-8' style={{ marginTop: '-6rem', width: '70rem', height: '50rem'}}>
        <div className='flex justify-between'>

            <h1 className=' font-bold p-6 '>
            All Class and Student Data
            </h1>
            <div>
                <select className='bg-slate-200 m-4 ml-8 text-center h-10' style={{width:'16rem'}}>
                    <option value="">Select Class for Student</option>
                    <option value="PENDING">PENDING</option>
                    <option value="RESULTING">RESULTING</option>
        
                </select>
                
            </div>
            <button className=' bg-orange-500 m-4 ml-24 h-8 font-bold text-center ' style={{width:'8rem'}}  >Find</button>
        </div>
        </div>
            
    </div>
  );
};

export default ViewData;