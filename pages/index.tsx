import type { NextPage } from 'next'
import Image from 'next/image'

import topLogo from '../public/bundeliga_fan_logo.png'
import playeBanner from '../public/budensliga_player_banner.png'
import playerCards from '../public/player_cards.png'
import phonelinks from '../public/phone_links.jpg';
import mPic1 from '../public/mobile_eg1.jpg'
import mPic2 from '../public/mobile_eg2.jpg'
import mPic3 from '../public/mobile_eg3.jpg'

//todo: center phone image and text section

const Home: NextPage = () => {
  return (
    <div className='bg-gray-100 p-4 pt-20'>
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
      <div className='relative mx-auto max-w-7xl'>
        <div className='self-center'>
          <Image 
            src={playeBanner}
            width={3000}
            height={1000}
            alt='player banner'/>
        </div>

        <div className='absolute -bottom-16 left-1/3 z-10'>
          <Image
            src={playerCards}
            width={400}
            height={160}
            alt=''/>
        </div>
      </div>

      <div className='relative -top-2'>
          <div className='mx-auto max-w-7xl'>
            <Image 
              src={phonelinks}
              width={3000}
              height={2000}
              alt='player banner'/>
          </div>

          <div className='justify-self-center absolute top-16 right-1/4'>
            <div className='flex text-4xl font-extrabold'>
              Download the App
            </div>

            <div className='flex'>
              <div className='mx-auto text-sm font-normal pt-2'>
                  Your dreamteam always in your pocket
              </div>
            </div>

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
          </div>
      </div>

      <div className='mx-auto max-w-7xl pt-2'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='font-light bg-white'>
            <div>Recruit new players for your team each week.</div>
            <Image src={mPic1} width={300} height={420} alt=''/>
          </div>
          <div className='font-light bg-white'>
            <div>Choose your own starting 11 for the next matches.</div>
            <Image src={mPic2} width={300} height={420} alt=''/>
          </div>
          <div className='font-light bg-white'>
            <div>Earn points after each matchday and win great prizes.</div>
            <Image src={mPic3} width={300} height={420} alt=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
