import React from 'react';
import '../App.css';
import Particles from 'react-particles-js';
import TypingComponent from '../components/Typing';
import ScrollLock from 'react-scrolllock';


class Homepage extends React.Component {
  render () {
    return (
      <div className='particles'>
        <ScrollLock />
          <Particles width='100vw' height="100vh"
                className="particles"
              params={{
                "particles": {
                    "number": {
                        "value": 300,
                        "density": {
                            "enable": true,
                            "value_area":4000,
                            "opacity":100,
                        }
                    },
                    'color': {
                        'value': ['#19FF39', '#46B801', '#00471A','#FF4500']
                      },
                      'line_linked': {
                        'color': '#000000',
                        'opacity': 0.5,
                        "enable": true
                      },
                    "move": {
                        "speed": 2
                    },
                    "size": {
                        "value": 4
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 3,
                            "opacity_min": 0.1
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "push": {
                            "particles_nb": 1
                        }
                    }
                },
                "retina_detect": true
            }} />
          <TypingComponent />
      </div>
    );
  }
}
export default Homepage;