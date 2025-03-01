import simples from '/simple-star.jpeg'
import smile from '/smile.png'


export default function SixthSection(){
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
  
  