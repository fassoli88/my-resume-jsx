import Line from '../components/line'
import discovery from '/discovery.jpeg'
import doublestars from '/double-stars.jpeg'
import line from '/line.jpeg'
import random from '/random-draw.png'
import unexpect from '/unexpect-drawn.png'


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
  
  
  
  
export default function SecondSection(){
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
      <div className='second-section'>
          <img src={doublestars} id='doubleStars'/>
          <h1 id='sub-title' >Professional Experience</h1>
          <img src={discovery} id='discovery' />
          <div id='second-section'>
              <ul id='randoms'>
                <li>
                  <img src={random} id='random-1' className='random' />
                </li>
                <li>
                  <img src={random} id='random-2' className='random' />
                </li>
                <li>
                  <img src={random} id='random-3' className='random' />
                </li>
                <li>
                  <img src={random} id='random-4' className='random' />
                </li>
              </ul>
              </div>
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
                <img src={unexpect} id='unexpect' />
                <div id='f3-ex' >
                  <h3 id='f2-ex3'>
                    {dates[2]}<br/>{places}
                  </h3>
                  <Changebr text={experiences[2]}/>
                </div>
            </div>
        </div>

          <img src={line} id="line" className='line-s'/>
          <br />
      </div>
    )
  }