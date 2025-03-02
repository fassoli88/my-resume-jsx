import { useEffect } from 'react'

import FirstSection from './Sections/firstSection'
import SecondSection from './Sections/secondSection'
import ThirdSection from './Sections/thirdSection'
import FourthSection from './Sections/fourthSection'
import FifthSection from './Sections/fifthSection'
import SixthSection from './Sections/sixthSection'

import Title from './components/title'

import './App.css'

function App() {
  
  useEffect(() => {
    const cursor = document.querySelector(".circle-cursor");

    // Event listener to track mouse position
    const handleMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`; // Use template literals correctly
      cursor.style.top = `${e.clientY}px`;  // Use template literals correctly
    };

    // Add event listener for mousemove
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div id="app">
          <div className='circle-cursor'></div>
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
