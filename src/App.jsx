import { useState } from 'react'

import FirstSection from './Sections/firstSection'
import SecondSection from './Sections/secondSection'
import ThirdSection from './Sections/thirdSection'
import FourthSection from './Sections/fourthSection'
import FifthSection from './Sections/fifthSection'
import SixthSection from './Sections/sixthSection'

import Title from './components/title'

import './App.css'

function App() {
  
  
  return (
    <>
      <div id="app">
          <Title />
          
          <FirstSection  />
          <SecondSection />
          <ThirdSection  />
          <FourthSection />
          <FifthSection  />
          <SixthSection  />

          
      </div>
    </>
  )
}

export default App
