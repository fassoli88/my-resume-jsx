import mypic from '/my-picture.jpeg'
import curvednode from '/curved-arraw-node.jpeg'
import doubles from '/double.suns.jpeg'
import line from '/line.jpeg'
import github from '/github.svg'
import linkedin from '/linkedin.jpeg'

export default function FirstSection(){
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