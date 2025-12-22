import React from 'react'

export default function Header() {
  return (
    <div className='bg-[#1d2125] w-100 h-12 p-3 border-b bordered-box flex flex-row justify between border-b-[#hover:bg-slate-600 rounded-sm]'>
        <div className="left justify-center items-center flex">
            <h3 className='text-slate-50'>Trello Clone</h3>
        </div>

         <div className="right flex items-center space-x-4">
            <span>Remote Dev</span>
            <img className='rounded-full' src="https://placeholder.co/28x28/png" alt=""></img>
        </div>
    </div>
  );
}

