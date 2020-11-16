import React from 'react'
import ScrollLock from 'react-scrolllock';
import '../Typing.css'
import '../About.css'


export default class About extends React.Component {

  render () {
    return (
      <div className="container">
      <ScrollLock/>
        <div class="split left">
          <div class="centered">
              <p className='aboutInfo'>
                I am a Full Stack Developer recently graduated from Northcoders. I have a strong background in leadership roles from working in catering and am looking for the opportunity to apply these skills to a Junior Developer position. Having a methodical work ethic I maximise any resources and time available to enhance my progression and achieve precision in my results. Whether working in teams or individually I enjoy learning new programming skills and technology to be at the top of my game. 
              </p>
          </div>
        </div>

        <div class="split right">
        <div class="rightCentered">
            <p className='aboutHeaderRight'>Skills</p>
            <p>Javascript</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'60%'}}>60%</div>
            </div>
            <p>React</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'60%'}}>
                <div class="w3-center w3-text-white">60%</div>
              </div>
            </div>
            <p>Python</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'20%'}}>20%</div>
            </div>
            <p>Node.js</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'60%'}}>60%</div>
            </div>
            <p>HTML/CSS</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'60%'}}>60%</div>
            </div>
            <p>Flutter</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'10%'}}>10%</div>
            </div>
            <p>Dart</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'10%'}}>10%</div>
            </div>
        </div>
        </div>
      </div>
    )
  }

}

