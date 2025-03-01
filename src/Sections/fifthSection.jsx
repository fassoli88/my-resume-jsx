import curved from '/curved-arraw.jpeg'
import cyrcle from '/cyrcle.jpeg'

import Line from '../components/line'
export default function FifthSection(){
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