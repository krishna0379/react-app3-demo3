import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Page3 } from "./pages/page3";
import { Page2 } from "./pages/page2";
import { Page1 } from "./pages/Page1";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function App() {
  return (
    <Router>
      {/**NAVAIGtion logic  */}

      <Navbar bg="dark" expand="lg" variant="dark">
        <Link to="/">
          <Navbar.Brand href="#home">Project Book</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/page1">
              <Nav.Link href="#home">Page1</Nav.Link>
            </Link>

            <Link to="/page2">
              <Nav.Link href="#link">Page2</Nav.Link>
            </Link>

            <Link to="/page3">
              <Nav.Link href="#link">Page3</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

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

        <Route path="/">
          <Page1></Page1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
