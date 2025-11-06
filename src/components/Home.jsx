import React from 'react'

function Home() {
  return (
    <>
      <div className="parent-container">
      <div className="relative w-full h-[90vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dsgpcqrtj/video/upload/v1762434140/11976669_3840_2160_60fps_1_pjqbjz.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
        <h1 className="text-8xl font-bold mb-4 font-heading ">
          Empowering local businesses to thrive
        </h1>
      </div>
    </div>
      </div>
    </>
  )
}

export default Home
