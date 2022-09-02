import type { NextPage } from 'next'
import Image from 'next/image'
import topLogo from '../public/bundeliga_fan_logo.png'
import playeBanner from '../public/budensliga_player_banner.png'

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
            <div className='flex'>
              <div className='mx-auto text-xl font-medium pt-2'>
                Play the official Bundesliga Fantasy Manager
              </div>
            </div>
            <div className='flex pt-8'>
              <div className='mx-auto'>
                <button className='text-sm bg-black hover:bg-white text-white hover:text-black outline outline-black outline-2 p-2 w-32' >LOGIN</button>
                <span className='px-4'></span>
                <button className='text-sm hover:bg-black hover:text-white outline outline-2 hover:outline-black p-2 w-32'>REGISTER</button>
              </div>
            </div>
          </div>
      </div>
        <div className='mx-auto max-w-7xl'>
          <Image 
            src={playeBanner}
            width={3000}
            height={1000}
            alt='player banner'
            className='items-center justify-center'/>
        </div>
    </div>
  )
}

export default Home
