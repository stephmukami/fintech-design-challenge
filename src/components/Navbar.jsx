import React from 'react'

function Navbar() {
    return (
        <>
            <div className="parent-container">
                <div className="flex flex-parent text-red-500 justify-between p-5 ">

                    <div className="logo">
                        <img src="./teya-yellow-logo.png" alt=" clear teya logo" />
                    </div>

                    <div className="nav-links flex space-x-4">
                        <h3>Products</h3>
                        <h3>Partners</h3>
                        <h3>Pricing</h3>
                        <h3>Help</h3>
                    </div>

                    <div className="flex space-x-4">
                        <button>Log in</button>
                        <button>Join Us</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
