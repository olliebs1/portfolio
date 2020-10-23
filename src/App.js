import React from 'react';
import { Router } from '@reach/router'
import { Route} from 'react-router-dom';
import ContactPage from '../src/pages/ContactPage'
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
