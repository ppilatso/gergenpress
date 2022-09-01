import type { NextPage } from 'next'
import Image from 'next/image'
import topLogo from '../public/bundeliga_fan_logo.png'

//todo center Smaller text coorectly
//todo center the buttons corectly and style 

const Home: NextPage = () => {
  return (
    <div className='bg-gray-100 p-4'>
      <div className='grid grid-rows-2 gap-4'>
          <div className='justify-self-center'>
            <Image 
              src={topLogo} 
              width={150}
              height={210}
              alt='logo' />
          </div>
          <div className='justify-self-center'>
            <div className='text-5xl font-black pt-2'>
              Your team - your game
            </div>
            <div className='pl-14 text-xl font-medium pt-2'>
              Play the official Bundesliga Fantasy Manager
            </div>
            <div className='grid grid-cols-2 gap-0 pt-8'>
              <button className='outline outline-offset-2 outline-2 p-2 w-32' >Login</button>
              <button className='outline outline-offset-2 outline-2 p-2 w-32'>Register</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home
