import React from 'react'
import { CirclePlay, Check, TrendingUp, WalletCards, HandFist, User, Zap, Coins, UsersRound, Eye } from 'lucide-react'
import HomePageNavbar from './HomePageNavbar'
function Home() {
  return (
    <>
      <div className="parent-container h-[100vh] ">

        <div className='bg-transparent '>
          <HomePageNavbar />

        </div>
        <div className="relative w-full h-[100vh] overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dsgpcqrtj/video/upload/v1762434140/11976669_3840_2160_60fps_1_pjqbjz.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className=" text-white  text-center px-5 py-4 w-[65%] max-w-4xl rounded-lg">
              <h1 className=" text-4xl md:text-7xl mb-8  font-heading break-words leading-tight font-thin mt-14 ">
                Empowering local <br />  businesses to thrive
              </h1>
              <h1 className='text-center font-display md:text-lg mb-10'>
                Unlock better management with Teya's integrated Payments, <br /> Funding and Business Account solution.
              </h1>
              <button className='bg-brand-yellow text-secondary-dark-grey mb-5 font-bold rounded-4xl h-[3rem] p-2 w-[12rem]'>
                Check our offers
              </button>
              <div className="flex justify-center space-x-2 items-center mb-[5rem] md:mb-[8rem]  ">
                <div>
                  <CirclePlay className="text-white" />
                </div>

                <div>
                  <h2 className='underline'>Watch our film</h2>
                </div>


              </div>

              <div className="carousel flex space-x-[2rem]">

                <div className="flex space-x-2">
                  <div><Check /></div>
                  <div className="whitespace-nowrap">Quick Set Up</div>
                </div>

                <div className="flex space-x-2">
                  <div><TrendingUp /></div>
                  <div className="whitespace-nowrap">Growth tools built-in</div>
                </div>

                <div className="flex space-x-2">
                  <div><WalletCards /></div>
                  <div className="whitespace-nowrap">Next Day Settlement</div>
                </div>

                <div className="flex space-x-2">
                  <div><HandFist /></div>
                  <div className="whitespace-nowrap">Cancel any time, stay because we deliver</div>
                </div>

                <div className="flex space-x-2">
                  <div><User /></div>
                  <div className="whitespace-nowrap">Human Support</div>
                </div>

                <div className="flex space-x-2">
                  <div><Zap /></div>
                  <div className="whitespace-nowrap">Fast Transactions</div>
                </div>

                <div className="flex space-x-2">
                  <div><UsersRound /></div>
                  <div className="whitespace-nowrap">Trusted by 70k customers</div>
                </div>

                <div className="flex space-x-2">
                  <div><Coins /></div>
                  <div className="whitespace-nowrap">Better Cashflow</div>
                </div>

                <div className="flex space-x-2">
                  <div><Eye /></div>
                  <div className="whitespace-nowrap">No hidden fees</div>
                </div>

              </div>


            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
