import React from 'react'
import Logo from '../Components/Logo'
import Slides_Mimari from '../Components/Slides_Cultures'
import Slides_Dini from '../Components/Slides_Restaurants'

function Home() {
  return (
    <>
      <Logo/><br /><br />
      <Slides_Mimari /> <br /> <br />
      <Slides_Dini /> <br /> <br />
    </>
  )
}

export default Home