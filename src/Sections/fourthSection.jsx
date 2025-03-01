import arraw from '/arraw.jpeg'
import notebooks from '/notebooks.jpeg'

import Line from '../components/line'


export default function FourthSection(){
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