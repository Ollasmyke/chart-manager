import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import Home from './pages/dashboard/homepage/Home';
import About from './pages/dashboard/about/About';
import Support from './pages/dashboard/support/Support';
import Login from "./pages/auth/login/Login";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/support" component={Support}/>
      </Switch>
    </Router>
  );
}

export default App;
