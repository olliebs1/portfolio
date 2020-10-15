import React, { Component } from "react";
import Typing from 'react-typing-animation';
import '../Typing.css';

export default class TypingComponent extends Component {
  
  
    state = {
      finishedTyping: false,
    }

    render() {
    return (
      <div className="typing">
        <Typing onFinishedTyping={() => {
            this.setState({finishedTyping: true, open: true})
        }}>
                <span className='typing'>Hello my name is Olivier Benson-Smith.</span>
                <br></br>
                <span> I am a Full-Stack Developer.</span>
        </Typing>
      <div>
        {this.state.finishedTyping === false ? '' : 
        <a class="linkButton" href={'/portfolio'}>
          <div class="center-con">
            <div class="round">
                <div id="cta">
                  <span class="arrow primera next "></span>
                  <span class="arrow segunda next "></span>
                </div>
            </div>
          </div>
        </a>}
        </div>
      </div>
    );
  }
  }