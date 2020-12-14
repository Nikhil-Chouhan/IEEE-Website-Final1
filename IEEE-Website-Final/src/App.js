import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import LandingPage from './views/LandingPage'
import SplashScreen from './layout/SplashScreen'
import About from './views/About'
import Projects from './views/Projects'
import Blogs from './views/Blogs'
import Events from './views/Events'
import Gallery from './views/Gallery'
import ContactUs from './views/Contact'
import MobileNav from './layout/MobileNav'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <MobileNav />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/blogs' component={Blogs} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/contactus' component={ContactUs} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
