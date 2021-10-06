import './App.css';
import Home from './pages/homepage/Home';
import About from './pages/about/About';
import Support from './pages/support/Support';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/support" component={Support}/>
      </Switch>
    </Router>
  );
}

export default App;