import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import ReactGA from "react-ga";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/About/about.page";
import ContactPage from "./pages/ContactPage/ContactPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HiddenContent from "./pages/HiddenContent";
import PersonaPage from "./pages/PersonaPage";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./App.scss";

const initializeReactGA = () => {
  ReactGA.initialize("{{trackingtag}}");
  ReactGA.pageview("/homepage");
};

function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Router>
      <div className="app">
        <Navbar className="nav-bar" variant="dark">
          <Navbar.Brand className="brand">SmartQ</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link>
              <Link className="link" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/about">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/persona">
                Persona
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/login">
                Login
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <div className="content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/sign-up">
              <SignUpPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/persona">
              <PersonaPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
            <Route path="/hidden-content">
              <HiddenContent />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
