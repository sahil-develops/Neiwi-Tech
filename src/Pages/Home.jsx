import React from 'react'
import Profile from '../components/Profile/Profile'
import Services from '../components/Services/Services'
import Projects from '../components/Projects/Projects'
import Benefits from '../components/Benefits/Benefits'

const Home = () => {
  return (
    <div>
        <Profile/>
        <Services/>
        <Projects/>
        <Benefits/>
    </div>
  )
}

export default Home