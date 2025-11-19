import React from 'react'

function HomePageNavbar() {
    return (
        <>
          
            <div className="bg-transparent font-display">
                <div className="flex items-center text-white justify-between p-5 bg-transparent z-10 absolute top-0 left-0 right-0 text-lg ">

                    <div className="logo">
                        <img src="./clear-logo.png" alt="clear teya logo" className="h-10" />
                    </div>

                    <div className="nav-links flex items-center space-x-8 text-sm">
                        <h3 className="cursor-pointer hover:text-gray-300">Products</h3>
                        <h3 className="cursor-pointer hover:text-gray-300">Partners</h3>
                        <h3 className="cursor-pointer hover:text-gray-300">Pricing</h3>
                        <h3 className="cursor-pointer hover:text-gray-300">Help</h3>
                    </div>

                    <div className="flex items-center space-x-4 md:flex-row flex-col text-sm">
                        <button className="px-6 py-1 hover:text-gray-300  border-2 rounded-4xl">Log in</button>
                        <button className="px-4 py-1 bg-blue-400 hover:bg-blue-500  rounded-4xl text-white">Join Us</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePageNavbar
