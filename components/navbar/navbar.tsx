/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'

//todo: fix menu button on hover highlight
//todo: underline nav item on hover
//todo: appropriate font and logo with optimized Next/Image

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

const myLoader = () => {
   return `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`;
}

function classNames(...classes: any[]) {
   return classes.filter(Boolean).join(' ')
}

function navbar() {
   return (
      <Disclosure as='nav' className='bg-white drop-shadow-sm'>
         {({ open }) => (
            <>
            <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-36">
               <div className="relative flex h-16 items-center justify-between">
                     <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                           <h2>Bundesliga</h2>
                        </div>
                        <div className='hidden mx-auto lg:px-48 sm:ml-6 sm:block'>
                           <div className='flex space-x-4'>
                           {navigation.map((item) => (
                              <a
                                 key={item.name}
                                 href={item.href}
                                 className={classNames(
                                    item.current ? 'text-gray-500' : 'text-gray-500',
                                    'px-2 py-2 rounded-md text-xs md:text-sm font-light'
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
                                 hover:outline-none focus:ring-2 
                                 hover:ring-white focus:ring-offset-2 
                                 hover:ring-offset-gray-800'
                              >
                              <span className="sr-only">Open user menu</span>
                              <img
                                 className="h-8 w-8 rounded-full"
                                 src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                 alt='Profile Image'
                              />
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