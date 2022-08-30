import React from 'react'
import Link from 'next/link'
import Styles from './navbar.module.css'
import Image from 'next/image'

const navigation = [
   { name: 'Home', href: '#', current: true },
   { name: 'Table', href: '#', current: false },
   { name: 'Clubs', href: '#', current: false },
   { name: 'Fixtures & Results', href: '#', current: false },
   { name: 'Leaders & Prizes', href: '#', current: false },
   { name: 'Live', href: '#', current: false },
   { name: 'Videos', href: '#', current: false },
   { name: 'Legends', href: '#', current: false },
   { name: 'Stats', href: '#', current: false },
   { name: 'Awards', href: '#', current: false },
   { name: 'FAQ', href: '#', current: false },
   { name: 'Players', href: '#', current: false },
 ]

function navbar() {
   return (
      <div>
         <nav className='bg-slate-50'>
         <div className="mx-auto items-center max-w-8xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-14 items-center">
               <div className='px-12'>Bundesliga</div>
               <div className='flex items-center space-x-2'>
                  {navigation.map((link, index) => {
                     return (
                     <ul className='text-gray-400 px-3 py-2 text-xs font-light' key={index}>
                        <Link href={link.href}>
                           <li key={index}>{link.name}</li>
                        </Link>
                     </ul>
                     ); 
                  })}
               </div>

               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  P
               </div>
            </div>
         </div>
         </nav>
      </div>
   )
}

export default navbar