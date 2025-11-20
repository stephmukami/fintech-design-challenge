import React from 'react'
import { CirclePlay, Check, TrendingUp, WalletCards, HandFist, User, Zap, Coins, UsersRound, Eye, MoveRight } from 'lucide-react'
import HomePageNavbar from './HomePageNavbar'
function Home() {
  return (
    <>
      <div className="parent-container h-[100vh] p-[0.7rem] ">

        <div className='bg-transparent  '>
          <HomePageNavbar />

        </div>

        <div className="relative  h-[95vh] overflow-hidden p-[6rem] rounded-4xl">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dsgpcqrtj/video/upload/v1762434140/11976669_3840_2160_60fps_1_pjqbjz.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="absolute inset-0 flex justify-center items-center ">
            <div className=" text-white  text-center px-5 py-4 w-[65%] max-w-4xl  ">
              <h1 className=" text-4xl md:text-7xl mb-8  font-heading break-words leading-tight font-thin mt-18 ">
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

              <div className="absolute bottom-10 left-0 w-full overflow-hidden ">
                <div className="carousel-track flex  whitespace-nowrap animate-scroll ">

                  {/* FIRST SET */}
                  <div className="flex items-center space-x-[2rem] px-10 w-max">
                    <Check className="h-5" /><span>Quick Set Up</span>
                    <TrendingUp className="h-5" /><span>Growth tools built-in</span>
                    <WalletCards className="h-5" /><span>Next Day Settlement</span>
                    <HandFist className="h-5" /><span>Cancel any time</span>
                    <User className="h-5" /><span>Human Support</span>
                    <Zap className="h-5" /><span>Fast Transactions</span>
                    <UsersRound className="h-5" /><span>Trusted by 70k customers</span>
                    <Coins className="h-5" /><span>Better Cashflow</span>
                    <Eye className="h-5" /><span>No hidden fees</span>
                  </div>

                  <div className="flex items-center space-x-[2rem] px-10 w-max">
                    <Check className="h-5" /><span>Quick Set Up</span>
                    <TrendingUp className="h-5" /><span>Growth tools built-in</span>
                    <WalletCards className="h-5" /><span>Next Day Settlement</span>
                    <HandFist className="h-5" /><span>Cancel any time</span>
                    <User className="h-5" /><span>Human Support</span>
                    <Zap className="h-5" /><span>Fast Transactions</span>
                    <UsersRound className="h-5" /><span>Trusted by 70k customers</span>
                    <Coins className="h-5" /><span>Better Cashflow</span>
                    <Eye className="h-5" /><span>No hidden fees</span>
                  </div>

                </div>
              </div>



            </div>



          </div>

        </div>

        <div className='border border-amber-400 text-center p-[2.5rem] flex flex-col justify-center items-center '>
          <h3 className='text-secondary-blue font-bold text-2xl mb-8'>Teya Product</h3>
          <h3 className='text-5xl font-bold mb-10'>
            Selling and spending, all in sync
          </h3>
          <p className='text-gray-500 font-medium mb-6'>
            From card machines to our business account, everything works seamlessly <br></br>

            together so you can focus on your customers.
          </p>
          <img src="./trust-pilot.svg" alt="trust pilot image" className='h-[3rem] mb-6' />

          <div className="flex border border-red-600 flex-col md:flex-row space-y-10 md:space-x-12 justify-center items-center md:items-start mt-10">

            {/* SELL & GET PAID */}
            <div className="flex flex-col w-[20rem]">
              <div className="rounded-2xl w-full h-[16rem] md:h-[20rem] mb-6">
                <img src="./man_customer.jpg" className="w-full h-full object-cover rounded-2xl" alt="" />
              </div>

              <h3 className="text-4xl font-medium mb-4">Sell & Get paid</h3>

              <ul className="list-disc space-y-2 text-gray-600 text-left ml-5">
                <li>In person through Tap and Terminals</li>
                <li>At distance through Pay by Link</li>
                <li>Get paid next business day</li>
              </ul>

              <h3 className="mt-6 cursor-pointer flex items-center gap-2 text-gray-600 font-medium">
                Discover our Card Machines <MoveRight />
              </h3>
            </div>


            {/* MANAGE */}
            <div className="flex flex-col w-[20rem]">
              <div className="rounded-2xl w-full h-[16rem] md:h-[20rem]  mb-6">
                <img src="./phone_picture.jpg" className="w-full h-full object-cover rounded-2xl" alt="" />
              </div>

              <h3 className="text-4xl font-medium mb-4">Manage</h3>

              <ul className="list-disc space-y-2 text-gray-600 text-left ml-5">
                <li>Sales and expenses, one button away</li>
                <li>Transfer money to any bank account</li>
                <li>Track your expenses real-time</li>
              </ul>
            </div>


            {/* SPEND & EARN */}
            <div className="flex flex-col w-[20rem]">
              <div className="rounded-2xl w-full h-[16rem] md:h-[20rem] mb-6">
                <img src="./credit_card.jpg" className="w-full h-full object-cover rounded-2xl" alt="" />
              </div>

              <h3 className="text-4xl font-medium mb-4">Spend & Earn</h3>

              <ul className="list-disc space-y-2 text-gray-600 text-left ml-5">
                <li>Create multiple cards</li>
                <li>Define individual limits</li>
                <li>0.5% cashback across all spending</li>
              </ul>

              <h3 className="mt-6 cursor-pointer flex items-center gap-2 text-gray-600 font-medium">
                Learn about Business Account <MoveRight />
              </h3>
            </div>

          </div>

        </div>


        <div className="w-full bg-[#F9F9F9] px-6 py-16 md:py-24 font-sans">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

            {/* Left Column: Text & Testimonial */}
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-[1.1] tracking-tight mb-10">
                  Empowering small , local businesses since 2019
                </h2>

              </div>

              <div className=" overflow-x-hidden border border-amber-200">




                <div className="carousel-parent carousel-track animate-scroll whitespace-nowrap space-x-[4rem] flex border">

                  <div className='carousel-item  '>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 ">
                      "Cash Advance is very good for small businesses. You pay little <br></br>
                      by little and you don't need to touch your savings.  <br></br>It really
                      helped me and it was quite easy."
                    </p>

                    {/* User Profile */}
                    <div className="flex items-center gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                        alt="Adrian"
                        className="w-14 h-14 rounded-full object-cover shadow-sm"
                      />
                      <div className="flex flex-col">
                        {/* Stars */}
                        <div className="flex gap-1 mb-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-4 h-4 text-gray-900 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm font-bold text-gray-900">Adrian, La Real Paella</span>
                        <span className="text-sm text-gray-500">London, UK</span>
                      </div>
                    </div>
                  </div>

                  <div className='carousel-item  '>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 ">
                      "Cash Advance is very good for small businesses. You pay little <br></br>
                      by little and you don't need to touch your savings.  <br></br>It really
                      helped me and it was quite easy."
                    </p>

                    {/* User Profile */}
                    <div className="flex items-center gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                        alt="Adrian"
                        className="w-14 h-14 rounded-full object-cover shadow-sm"
                      />
                      <div className="flex flex-col">
                        {/* Stars */}
                        <div className="flex gap-1 mb-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-4 h-4 text-gray-900 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm font-bold text-gray-900">Adrian, La Real Paella</span>
                        <span className="text-sm text-gray-500">London, UK</span>
                      </div>
                    </div>
                  </div>

                  <div className='carousel-item  '>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 ">
                      "Cash Advance is very good for small businesses. You pay little <br></br>
                      by little and you don't need to touch your savings.  <br></br>It really
                      helped me and it was quite easy."
                    </p>

                    {/* User Profile */}
                    <div className="flex items-center gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                        alt="Adrian"
                        className="w-14 h-14 rounded-full object-cover shadow-sm"
                      />
                      <div className="flex flex-col">
                        {/* Stars */}
                        <div className="flex gap-1 mb-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-4 h-4 text-gray-900 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm font-bold text-gray-900">Adrian, La Real Paella</span>
                        <span className="text-sm text-gray-500">London, UK</span>
                      </div>
                    </div>
                  </div>


                </div>


              </div>




            </div>

            {/* Right Column: Stats */}
            <div className="flex flex-col w-full">

              {/* Stat 1 */}
              <div className="border-b border-gray-300 pb-8 mb-8 text-right">
                <h3 className="text-gray-900 font-bold text-base mb-2">Active members</h3>
                <p className="text-4xl md:text-5xl font-bold text-secondary-blue">70,000+</p>
              </div>

              {/* Stat 2 */}
              <div className="border-b border-gray-300 pb-8 mb-8 text-right">
                <h3 className="text-gray-900 font-bold text-base mb-2">Transactions processed in 2024</h3>
                <p className="text-4xl md:text-5xl font-bold text-secondary-blue">377,736,694</p>
              </div>

              {/* Stat 3 */}
              <div className="text-right">
                <h3 className="text-gray-900 font-bold text-base mb-2">Total in cash advance</h3>
                <p className="text-4xl md:text-5xl font-bold text-secondary-blue">£27,000,000+</p>
              </div>

              {/* Link */}
              <div className="mt-6 flex justify-end">
                <a href="#" className="group inline-flex items-center gap-1 text-gray-500 hover:text-secondary-blue transition-colors font-medium text-sm">
                  Learn more
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>



      </div>

    </>
  )
}

export default Home
