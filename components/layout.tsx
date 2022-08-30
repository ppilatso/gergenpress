import React, { ReactNode } from 'react'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'

interface Props {
   children?: ReactNode
}

function layout({ children }: Props) {
  return (
    <>
    <Navbar />
    <main>{ children }</main>
    <Footer />
    </>
  )
}

export default layout