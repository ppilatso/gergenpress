import React from 'react'

function download() {
  return (
   <div className='flex pt-8'>
      <div className='mx-auto'>
      <a className='text-xs font-bold bg-black text-white hover:underline hover:text-gray-300 outline-2 p-3' >
         APP STORE
      </a>
      <span className='px-4'></span>
      <a className='text-xs font-bold bg-black text-white hover:underline hover:text-gray-300 outline-2 p-3'>
         GOOGLE PLAY
      </a>
      </div>
   </div>
  )
}

export default download