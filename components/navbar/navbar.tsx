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
         NAVIGATION
      </div>
   )
}

export default navbar