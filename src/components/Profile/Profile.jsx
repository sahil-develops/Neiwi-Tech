import React from 'react'

const Profile = () => {
    const myStyle = {
        background:
          'linear-gradient(115.74deg, #FFFFFF 1.79%, rgba(20, 241, 217, 0.28) 28.39%, #FFFFFF 52.83%, rgba(54, 114, 248, 0.42) 77.49%, #FFFFFF 100%)',
        
      };
    
  return (
    <div style={myStyle}>
          <header className="container flex flex-col-reverse sm:flex-row py-24 mx-auto max-w-screen-lg">
        <div className="w-full px-6 py-8">
          <h1 className="text-2xl mt-4 sm:text-5xl pt-8 font-semibold text-gray-900 font-Roboto text-blue">
            Transforming Ideas into Innovative Software Solutions: A Software Engineer's Portfolio
          </h1>
          <p className="text-gray-700 pt-12 font-medium font-Roboto ">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote
            bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
            chambray.
          </p>
        </div>
      </header>
    </div>
  )
}

export default Profile