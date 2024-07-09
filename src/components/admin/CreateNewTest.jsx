import React from 'react';

const CreateNewTest = () => {
  return (
    <div className='flex flex-col'>
      <div className='bg-orange-500 h-1/4 mb-10 relative'>
        <h1 className='uppercase w-full h-40 font-bold p-6'>
          Create New Test
        </h1>
      </div>
      <div className='bg-white h-96 relative ml-48' style={{ marginTop: '-6rem', width: '45rem', height: '30rem'}}>
        <h1 className=' font-bold p-6'>
          Create New Test
        </h1>
        <div>
            <input type="text" placeholder='Test Name' className=' bg-slate-200 m-4 ml-20' style={{width:'35rem'}} />
            <input type="text" placeholder='Subject Name' className=' bg-slate-200 m-4 ml-20' style={{width:'35rem'}} />
            <input type="Date" placeholder='Test Date' className=' bg-slate-200 m-4 ml-20' style={{width:'35rem'}} />
            <input type="text" placeholder='Total Question Count' className=' bg-slate-200 m-4 ml-20' style={{width:'35rem'}} />
            <div className='flex'>
                <select className='bg-slate-200 m-4 ml-20 text-center h-10' style={{width:'16rem'}}>
                    <option value="">Select Class for Student</option>
                    <option value="PENDING">PENDING</option>
                    <option value="RESULTING">RESULTING</option>
        
                </select>
                <select className='bg-slate-200 m-4 ml-8 text-center h-10' style={{width:'16rem'}}>
                    <option value="">Select Class for Student</option>
                    <option value="PENDING">PENDING</option>
                    <option value="RESULTING">RESULTING</option>
        
                </select>

            </div>
            <button className=' bg-orange-500 m-4 ml-48 h-8 font-bold text-center ' style={{width:'20rem'}}  >Create Test</button>
        </div>
        
      </div>
    </div>
  );
};

export default CreateNewTest;