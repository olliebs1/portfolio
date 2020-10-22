import React from 'react';
import { Router } from '@reach/router'
import { Route} from 'react-router-dom';
import ContactPage from '../src/pages/ContactPage'
// import { SocialIcon } from 'react-social-icons';
// import './App.css';
// import { stack as Menu } from 'react-burger-menu';
// import styles from '../src/Styles'
// import About from './pages/About.jsx'
// import StarfieldAnimation from 'react-starfield-animation'
import Headnav from './pages/Headnav'
import Homepage from './pages/Homepage';
import About from './pages/About';
import Portfolio from './pages/Portfolio';



class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Headnav path={'/*'} />
        <Router>
          <Route path='/contact' exact render={() => <ContactPage/>} />
          <Route path='/' render={() => <Homepage/>}/>
          <Route path='/about' render={() => <About/>}/>
          <Route path='/portfolio' render={() => <Portfolio/>}/>
        </Router>
      </div>
    );
  }
}
export default App;
