import React from 'react'
import ScrollLock from 'react-scrolllock';
import '../Typing.css'
import '../About.css'


export default class About extends React.Component {

  render () {
    return (
      <div>
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
          <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
            <p>Javascript</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'90%'}}>90%</div>
            </div>
            <p>React</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'80%'}}>
                <div class="w3-center w3-text-white">80%</div>
              </div>
            </div>
            <p>Python</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'75%'}}>75%</div>
            </div>
            <p>Node.js</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'75%'}}>75%</div>
            </div>
            <p>HTML/CSS</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'75%'}}>75%</div>
            </div>
            <p>Flutter</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'50%'}}>50%</div>
            </div>
            <p>Dart</p>
            <div class="w3-light-grey w3-round-xlarge w3-small">
              <div class="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'75%'}}>75%</div>
            </div>
        </div>
        </div>
      </div>
    )
  }

}

