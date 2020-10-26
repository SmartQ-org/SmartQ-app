import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactGA from 'react-ga';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
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
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/persona">
            <PersonaPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
