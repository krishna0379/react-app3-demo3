import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Page3 } from "./pages/page3";
import { Page2 } from "./pages/page2";
import { Page1 } from "./pages/Page1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/page1">
          <Page1></Page1>
        </Route>

        <Route path="/page2">
          <Page2></Page2>
        </Route>

        <Route path="/page3">
          <Page3></Page3>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
