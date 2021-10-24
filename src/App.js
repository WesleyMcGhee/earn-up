import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Landing from "./pages/landing/Landing";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
