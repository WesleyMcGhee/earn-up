import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
