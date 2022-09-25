import React from 'react'
import Link from 'next/link'
import Styles from './footer.module.css'

const links = [
   { name: 'Advertising', href: '#', current: true },
   { name: 'Legal Notices', href: '#', current: false },
   { name: 'Cookie Settings', href: '#', current: false },
   { name: 'Privacy Statement', href: '#', current: false },
   { name: 'Terms of Use', href: '#', current: false },
   { name: 'Broadcasters', href: '#', current: false },
   { name: 'Jobs', href: '#', current: false },
   { name: 'Imprint', href: '#', current: false },
   { name: 'Contact', href: '#', current: false },
   { name: 'Partner', href: '#', current: false },
   { name: 'Player', href: '#', current: false },
]

function classNames(...classes: any[]) {
   return classes.filter(Boolean).join(' ')
}

function footer() {
   return (
      <div className='border-t-1 border-gray-800'>
         <div className='flex justify-center items-center bg-white py-2 md:py-1 h-16'>
            <div className='flex space-x-2 xl:space-x-0'>
               {links.map((item) => (
                  <a 
                     key={item.name}
                     href={item.href}
                     className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-500',
                        'px-2 md:px-1 text-xs xl:text-xs font-light'
                     )}>
                        {item.name} <span className='px-2 md:px-1 text-sm font-bold'>&#183;</span>
                     </a>
               ))}
            </div>
         </div>
         <div className='flex justify-center items-center bg-black py-2 md:py-1 h-16'>
            <div className='text-sm font-normal text-gray-400'>
               © 2022 DFL Deutsche Fußball Liga GmbH
            </div>
         </div>
      </div>
   )
}

export default footer