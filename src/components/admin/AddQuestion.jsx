import React from 'react';

const AddQuestion = () => {
  return (
    <div className='flex flex-col'>
      <div className='bg-orange-500 h-1/4 mb-10 relative'>
        <h1 className='uppercase w-full h-40 font-bold p-6'>
          Add New Questions
        </h1>
      </div>
      <div className='bg-white h-96 relative ml-48' style={{ marginTop: '-6rem', width: '50rem', height: '35rem'}}>
        <h1 className=' font-bold p-6'>
          Add New Questions
        </h1>
        <div>
            <textarea placeholder='Qusetion Title' className=' bg-slate-200 m-4 ml-20' style={{width:'40rem'}}></textarea>
            <input type="text" placeholder='Option A' className=' bg-slate-200 m-4 ml-20' style={{width:'40rem'}} />
            <input type="text" placeholder='Option B' className=' bg-slate-200 m-4 ml-20' style={{width:'40rem'}} />
            <input type="text" placeholder='Option C' className=' bg-slate-200 m-4 ml-20' style={{width:'40rem'}} />
            <input type="text" placeholder='Option D' className=' bg-slate-200 m-4 ml-20' style={{width:'40rem'}} />
            <input type="text" placeholder='Correct Option' className=' bg-slate-200 m-4 ml-20' style={{width:'40rem'}} />
            <input type="text" placeholder='Score' className=' bg-slate-200 m-4 ml-20' style={{width:'40rem'}} />
            <button className=' bg-orange-500 m-4 ml-60 h-8 font-bold text-center ' style={{width:'20rem'}}  >Add Question</button>
        </div>
        
      </div>
    </div>
  );
};

export default AddQuestion;