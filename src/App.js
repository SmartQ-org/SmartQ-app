import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactGA from "react-ga";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/About/about.page";
import ContactPage from "./pages/ContactPage/ContactPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HiddenContent from "./pages/HiddenContent";
import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "./assets/smartq-logo.png";
import "./App.scss";

const initializeReactGA = () => {
  ReactGA.initialize("{{trackingtag}}");
  ReactGA.pageview("/homepage");
};

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar className="nav-bar" variant="dark">
          <Navbar.Brand className="brand"><img className="logo" src={logo} alt="smart q logo"/></Navbar.Brand>
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
              <Link className="link" to="/features">
                Features
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
            <Route path="/features">
              <FeaturesPage />
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
