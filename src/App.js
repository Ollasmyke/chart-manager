import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import './App.css';
import Home from './pages/dashboard/homepage/Home';
import About from './pages/dashboard/about/About';
import Support from './pages/dashboard/support/Support';
import Login from "./pages/auth/login/Login";

const App = () => {

  const username = localStorage.getItem("username");
  const IsLoggedInRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
      username ? <Component {...props} /> : <Redirect to="/login"/>
    )}/>
  );

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <IsLoggedInRoute exact path="/" component={Home}/>
        <IsLoggedInRoute exact path="/about" component={About}/>
        <IsLoggedInRoute exact path="/support" component={Support}/>
      </Switch>
    </Router>
  );
}

export default App;
