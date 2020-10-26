import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactGA from 'react-ga';
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HiddenContent from "./pages/HiddenContent";
import PersonaPage from "./pages/PersonaPage";

const initializeReactGA = () => {
  ReactGA.initialize('{{trackingtag}}');
  ReactGA.pageview('/homepage');
}

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/persona">Persona</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
    </Router>
  );
}
