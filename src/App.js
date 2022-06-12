import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Blog from './Components/Blog/Blog';
import NotFound  from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/home'>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/services'>
          <Services></Services>
        </Route>
        <Route path='/blog'>
          <Blog></Blog>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
