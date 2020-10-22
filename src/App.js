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
          <Route path='http://www.obs-portfolio.co.uk/contact' exact render={() => <ContactPage/>} />
          <Route path='http://www.obs-portfolio.co.uk/home' render={() => <Homepage/>}/>
          <Route path='http://www.obs-portfolio.co.uk/about' render={() => <About/>}/>
          <Route path='http://www.obs-portfolio.co.uk/portfolio' render={() => <Portfolio/>}/>
        </Router>
      </div>
    );
  }
}
export default App;
