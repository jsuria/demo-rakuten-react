
//import style from "./App.module.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import LeaderboardPage from "./components/pages/LeaderboardPage"
import SchedulePage from "./components/pages/SchedulePage"
import NaviBar from "./components/common/NaviBar"
import NaviFooter from './components/common/NaviFooter'
import Error404Page from './components/pages/Error404Page'

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
            <Route path="*" component={Error404Page} />
          </Switch>
        <NaviFooter />
      </div>
    </Router>
  );
}

export default App;
