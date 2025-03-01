import line from '/line.jpeg'
import cyrcle from '/cyrcle.jpeg'

export default function ThirdSection(){
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
  