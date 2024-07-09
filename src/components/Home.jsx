import React from 'react'

import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div >
        <h1 className="text-3xl font-bold italic text-center mt-10">Quizzine.</h1>
        <div className="flex items-center justify-center py-4 m-8 w-full">
        <div className='m-12 bg-blue-500 w-60 h-12 text-center rounded-full text-white font-bold cursor-pointer hover:bg-blue-600'> 
          <div className='mt-2'>
            <NavLink to="/admin/login" >For Admin</NavLink>
          </div>
        </div>
        <div className='m-12 bg-blue-500 w-60 h-12 text-center rounded-full text-white cursor-pointer hover:bg-blue-600 font-bold '> 
          <div className='mt-2'>
            <NavLink to="/user/login" >For User</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home