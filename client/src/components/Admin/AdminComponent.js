import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AdminComponent = () => {
  return (
    <div className='w-full h-full min-h-[calc(100vh-64px)] border-2 border-red-600 flex justify-center items-center'>
        <div className='h-fit'>
            <div className='border-4 rounded-full border-richgreen-400 h-fit min-w-[513px] flex items-center justify-between'>
                <Link to = ''>
                    <p className='uppercase font-semibold text-xl p-2 px-4 hover:bg-green-800 hover:text-white rounded-full'>Add Task</p>
                </Link>
                <Link to = 'EditTask'>
                    <p className='uppercase font-semibold text-xl p-2 px-4 hover:bg-green-800 hover:text-white rounded-full'>Edit Task</p>
                </Link>
                <Link to = "addBadge">
                    <p className='uppercase font-semibold text-xl p-2 px-4 hover:bg-green-800 hover:text-white rounded-full'>Add Badge</p>
                </Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
      
    </div>
  )
}

export default AdminComponent
