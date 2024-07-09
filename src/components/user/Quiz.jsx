import React from 'react'

const Quiz = () => {
  return (
    <div >
        <div className='bg-white h-96 relative ml-48 ' style={{ width: '50rem', height: '35rem'}}>

            <h1 className=' font-bold p-6 text-xl'>
            1 Which of the Following Attributes
            </h1>
            <div>
                <button className=' bg-blue-500 m-2 h-14 ml-8 font-bold text-white text-left pl-10 rounded' style={{width:'70rem'}}  >A:- link</button>
                <button className=' bg-blue-500 m-2 h-14 ml-8 font-bold text-white text-left pl-10 rounded' style={{width:'70rem'}}  >B:- link</button>
                <button className=' bg-blue-500 m-2 h-14 ml-8 font-bold text-white text-left pl-10 rounded' style={{width:'70rem'}}  >C:- link</button>
                <button className=' bg-blue-500 m-2 ml-8 h-14 font-bold text-white text-left pl-10 rounded' style={{width:'70rem'}}  >D:- link</button>
            </div>
        </div>
        
    </div>
  )
}

export default Quiz