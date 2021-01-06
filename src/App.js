import React from "react";
import AboutUs from "./pages/AboutUs";
//import Nav
import Nav from "./components/Nav";
import "./styles/app.scss";
import { Route, Switch, useLocation } from "react-router-dom";
import OurWork from "./components/OurWork";
import ContactUs from "./components/ContactUs";
//import movieDetail

import MovieDetail from "./pages/movieDetail";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
