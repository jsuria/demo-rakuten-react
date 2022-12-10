
//import style from "./App.module.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import LeaderboardPage from "./components/pages/LeaderboardPage"
import SchedulePage from "./components/pages/SchedulePage"
import NaviBar from "./components/common/NaviBar"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <NaviBar />
          <Switch>
            <Route exact path="/leaderboard" component={LeaderboardPage} />
            <Route exact path="/schedule" component={SchedulePage} />
            <Route exact path="/" component={SchedulePage} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
