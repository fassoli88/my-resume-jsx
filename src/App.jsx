import { useState, useEffect } from 'react'
import mypic from '/my-picture.jpeg'
import arraw from '/arraw.jpeg'
import curved from '/curved-arraw.jpeg'
import curvednode from '/curved-arraw-node.jpeg'
import discovery from '/discovery.jpeg'
import doubles from '/double.suns.jpeg'
import doublestars from '/double-stars.jpeg'
import line from '/line.jpeg'
import notebooks from '/notebooks.jpeg'
import github from '/github.svg'
import instagram from '/instagram-logo.jpeg'
import linkedin from '/linkedin.jpeg'
import whatsapp from '/whatsapp.png'
import random from '/random-draw.png'
import cyrcle from '/cyrcle.jpeg'
import simples from '/simple-star.jpeg'
import smile from '/smile.png'
import unexpect from '/unexpect-drawn.png'

import axios from "axios";
import './App.css'




function Title(){
  return(
    <div id='subs1'>
      <h1 id='title'>Personal Blog</h1>
      <Lines/>
    </div>

  )
}

function Lines(){
  return(
  <div id="hand-lines">
    <div id="line-1"></div>
    <div id="line-2"></div>
    <div id="line-3"></div>
  </div>
  )
}
function Line(){
  return(<img src={line} id="line"/>)
}

const convertNewlinesToBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      {index !== text.split('\n').length - 1 && <br />}
    </span>
  ));
};

const Changebr = ({ text }) => {
  return <h3>{convertNewlinesToBreaks(text)}</h3>;
};



function FirstSection(){
  const about = `Passionate and detail-oriented Software Engineer with a background in Information Technology and a strong interest in web development, networking, and security. Skilled in full-stack development, scripting, and problem-solving. Experienced in IT support and web development through internships and projects. Eager to contribute to a dynamic engineering team and continuously expand technical expertise.`
  return(
          <div>
            <div id="s1">
              <div id='s1s1'>
                <h1 id='first-title'>Faisal Alsayed</h1>
                <p id="about">{about}</p>
              </div>
              <div id='s1s2'>
                <img src={doubles} id="doubles" />
                <img src={mypic} alt='My Picture' id="mypic"/>
                <img src={curvednode} alt='' id="cuvednode"/>
                <ul id='logos'>
                  <li>
                    <a href='https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BhnwhCfXnTpyBkZBkRQSWIw%3D%3D'>
                      <img src={linkedin} alt='linkedin-logo' id="linkedin"/>
                    </a>
                  </li>
                  <li>
                    <a href='https://github.com/fassoli88'>
                      <img src={github} alt='github-logo' id="github"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <img src={line} id="line"/>
          </div>
  )
}

function SecondSection(){
  let dates = ["Aug 2024 – present", "Feb 2024 – May 2024", "May 2023 – Dec 2023" ] 
  let places = ["Jeddah, Saudi Arabia"]
  let experiences = [`IT Support, Alansalus Private Schools \n
• Network Management: Analyzed, tested, troubleshot, and evaluated existing
network systems to address IT issues, ensuring optimal performance and
reliability.\n
• Automation: Developed a Python script to automate communication with
parents via WhatsApp, improving message delivery efficiency and enhancing
engagement.\n`, `IT Support
Internship\n
• Comprehensive Technical Support: Provide expert assistance for a wide range
of technology issues, including cabling networks and PC repairs, ensuring all
campus users receive timely and effective support.\n
• Problem Solving: Demonstrate strong analytical skills by diagnosing and
resolving technical problems, enhancing the overall user experience.\n
• Collaborative Teamwork: Work closely with colleagues to foster a supportive IT
environment, promoting efficient use of technology across the campus.;\n`, 
`Web Developer
Graduation Project,\n
• Project Overview: Developed a comprehensive website designed to connect
students with IT certification opportunities, serving as a resource for individuals
interested in advancing their knowledge and skills in technology.\n
• Technical Stack: Utilized HTML, CSS, and JavaScript for front-end development,
alongside Node.js and MongoDB for back-end functionality, ensuring a seamless
and responsive user experience.\n
• Key Features: Implemented user-friendly navigation and an engaging interface
to facilitate easy access to information about various IT certifications.\n`]


return(
    <div>
        <img src={doublestars} id='doubleStars' className='hidethem'/>
        <h1 id='subtitle' className='border border-primary' >Professional Experience</h1>
        <img src={discovery} id='discovery' className='hidethem'/>
        <div id='second-section'>
            <ul id='randoms'>
              <li>
                <img src={random} id='random-1' />
              </li>
              <li>
                <img src={random} id='random-2' />
              </li>
              <li>
                <img src={random} id='random-3' />
              </li>
              <li>
                <img src={random} id='random-4' />
              </li>
            </ul>
          <div className="s2">
              <div id='f1-ex'>
                <h3 id='f1-ex1'>
                  {dates[0]}<br/>{places}
                </h3>
                <Changebr text={experiences[0]}/>
              </div>
              <div id='f2-ex'>
                <h3 id='f2-ex2'>
                  {dates[1]}<br/>{places}
                </h3>
                <Changebr text={experiences[1]}/>
              </div>
              <img src={unexpect} id='unexpect' className='hidethem'/>
              <div id='f3-ex' className='hidethem'>
                <h3 id='f2-ex3'>
                  {dates[2]}<br/>{places}
                </h3>
                <Changebr text={experiences[2]}/>
              </div>
          </div>
      </div>
              <img src={line} id="line"/>
              <br />
    </div>
  )
}

function ThirdSection(){
  return(
    <>
      <div id='third-section'>
        <h1 id='subtitle'>Skills</h1>
        <div className='skills'>
          <h3>Programming — Python, JavaScript </h3>
          <img src={line} className="line-skill" id="line-skill-5"/>
          <h3>Web Development — HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, MySQL</h3>
          <img src={line} className="line-skill" id="line-skill-1"/>
          <h3>Software Development — API development, RESTful services, object-oriented programming</h3>
          <img src={line} className="line-skill" id="line-skill-2"/>
          <h3>Scripting & Automation — Bash scripting, command-line tools, Linux administration</h3>
          <img src={line} className="line-skill" id="line-skill-3"/>
          <h3>Version Control — Git, GitHub</h3>
          <img src={line} className="line-skill"  id="line-skill-5"/>
          <h3>Typing Speed — Up to 90 WPM</h3>
          <img src={line} className="line-skill"  id="line-skill-5"/>
        </div>
        <br/>
        <div id='cyrcle'  className='hidethem'>
          <img src={cyrcle}  className="cyrcle" id="cyrcle-1"/>
          <img src={cyrcle}  className="cyrcle" id="cyrcle-2"/>
          <img src={cyrcle}  className="cyrcle" id="cyrcle-3"/>
        </div>
        <div id='text-cyrcle'>
          <h3 id="text-cyrcle-1">Teamwork</h3>
          <h3 id="text-cyrcle-2">Analytical skills</h3>
          <h3 id="text-cyrcle-3">Adaptability</h3>
        </div>   
        <img src={line} id="line"/>
        <br />
      </div>
    </>
  )
}

function FourthSection(){
  return(
    <div>
      <br />
      <h1 id='subtitle'>Courses</h1>
      <img src={notebooks} id="notebooks" className='hidethem'/>
          <div id='courses' className='hidethem'>
            <img src={arraw}  className="course" id="course-1"/>
            <img src={arraw}  className="course" id="course-2"/>
            <img src={arraw}  className="course" id="course-3"/>
          </div>
          <div id='text-courses'>
            <h3 className="text-course" id="text-course-1">CS50: Introduction to Computer Science</h3>
            <h3 className="text-course" id="text-course-2">CS50’s Web Programming with Python and JavaScript</h3>
            <h3 className="text-course" id="text-course-3">Completed 900+ hours of coding practice and coursework.</h3>
          </div>   
          <br />
          <br />
          <br />
          <Line />
    </div>
  )
}

function FifthSection(){
  return(
    <div>
      <br/>
      <h1 id='subtitle'>Languages</h1>
      <br/>
      <div id='curveds'>
        <img src={curved} className='curved' id='curved-1'/>
        <img src={curved} className='curved' id='curved-2'/>
      </div>
      <div id="cyrcle">
        <img src={cyrcle} className='cyrcle anoth-cyrcle hidethem' id='cyrcle-1'/>
        <img src={cyrcle} className='cyrcle  anoth-cyrcle hidethem' id='cyrcle-2'/>
      </div> 
      <div id='lang-cyrcle'>
          <h3 className='lang-cyrcle-1'>Arabic</h3>
          <h3 className='lang-cyrcle-11'>100%</h3>
          <h3 className='lang-cyrcle-2'>English</h3>
          <h3 className='lang-cyrcle-21'>100%</h3>
      </div>
      <Line />
      <br/>
      <br/>
      <br/>
    </div>
  )
}

function SixthSection(){
  return(
    <div>
            <h1 id='subtitle'>Activities</h1>
            <div className='Activites'>
              <h3>- Active member of the Computer club at AOU</h3>
              <h3>- Volunteer to provide extra classes for Networking course at AOU</h3>
              <img src={simples}   id="simple" className='hidethem'/>
              <img src={smile}   id="smile" className='hidethem`'/>
            </div>
    </div>
  )
}


function App() {
  const [count, setCount] = useState(0)
  
  

  return (
    <>
      <div id="app">
          <Title />
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SixthSection />

          
      </div>
    </>
  )
}

export default App
