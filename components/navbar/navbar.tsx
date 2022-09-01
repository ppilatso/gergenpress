/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import { VscAccount } from 'react-icons/vsc'
import logo  from '../../public/bundesliga_pos.svg'

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

function classNames(...classes: any[]) {
   return classes.filter(Boolean).join(' ')
}

function navbar() {
   return (
      <Disclosure as='nav' className='bg-white drop-shadow-sm py-2 md:py-1'>
         {({ open }) => (
            <>
            <div className='mx-auto max-w-8xl sm:px-6 lg:px-9 2xl:px-60'>
               <div className='relative flex h-14 items-center justify-center'>
                  <div className='flex flex-shrink-0 items-center pt-3'>
                     <a href="#">
                        <Image src={logo} width={160} height={40} alt=''/>
                     </a>
                  </div>
                  <div className="flex flex-1 items-center justify-center">
                     <div className='hidden relative sm:ml-6 sm:block'>
                        <div className='flex space-x-2'>
                        {navigation.map((item) => (
                           <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                 item.current ? 'text-gray-800' : 'text-gray-500',
                                 'px-2 md:px-1 text-xs md:text-sm font-light md:font-normal decoration-2 hover:text-gray-800 hover:underline hover:underline-offset-8 md:hover:underline-offset-4'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                           >
                              {item.name}
                           </a>
                        ))}
                     </div>
                  </div>
               </div>

                  <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                     <Menu as='div' className='relative ml-3'>
                        <div>
                           <Menu.Button 
                              className='
                                 flex rounded-full 
                                 focus:ring-offset-gray-800'
                              >
                              <span className='sr-only'>Open user menu</span>
                              <VscAccount className='h-6 w-6 fill-gray-500 rounded-full'/>
                           </Menu.Button>
                        </div>
                        <Transition
                           as={Fragment}
                           enter='transition ease-out duration-100'
                           enterFrom='transform opacity-0 scale-95'
                           enterTo='transform opacity-100 scale-100'
                           leave='transition ease-in duration-75'
                           leaveFrom='transform opacity-100 scale-100'
                           leaveTo='transform opacity-0 scale-95'
                        >
                           <Menu.Items 
                              className='absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                              <Menu.Item>
                                 {({ active }) => (
                                    
                                    <a href="#"
                                       className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                          Profile
                                    </a>

                                 )}
                              </Menu.Item>

                              <Menu.Item>
                                 {({ active }) => (
                                    
                                    <a href="#"
                                       className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                          Settings
                                    </a>

                                 )}
                              </Menu.Item>

                              <Menu.Item>
                                 {({ active }) => (
                                    
                                    <a href="#"
                                       className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                          Sign Out
                                    </a>

                                 )}
                              </Menu.Item>
                           </Menu.Items>
                        </Transition>
                     </Menu>
                  </div>
               </div>
            </div>
            </>
         )}
      </Disclosure>
   )
}

export default navbar