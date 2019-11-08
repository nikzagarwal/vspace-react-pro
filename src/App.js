import React, { Component } from 'react';

import PageWrapper from './Component/PageWrapper.js';
import Home from './Component/Home.js';
import About from './Component/About.js';
import Contact from './Component/Contact.js';
import Gito from './Component/Gito.js';
import Consulting from './Component/Consulting.js';
import MarketPlace from './Component/MarketPlace.js';
import Survey from './Component/Survey.js';
import Digit from './Component/Digit.js';
import Kyv from './Component/Kyv.js';
import Ux from './Component/Ux.js';
import DigitalCommerce from './Component/DigitalCommerce.js';
import Headless from './Component/Headless.js';
import Mobile from './Component/Mobile.js';
import Marketing from './Component/Marketing.js';

import { BrowserRouter as Router, Route, } from "react-router-dom";

class App extends Component {


  render() {

    return (
      <Router basename="/vspace-react-pro" >
        <PageWrapper>
          <Route
            exact={true}
            path="/"
            component={Home}
          />
          <Route
            path="/Home"
            component={Home}
          />

          <Route
            path="/About"
            component={About}
          />
          <Route
            path="/contact"
            component={Contact}
          />
          <Route
            path="/gito-ai"
            component={Gito}
          />
          <Route
            path="/consulting"
            component={Consulting}
          />
          <Route
            path="/marketPlace"
            component={MarketPlace}
          />
          <Route
            path="/survey"
            component={Survey}
          />

          <Route
            path="/digit"
            component={Digit}
          />

          <Route
            path="/kyv"
            component={Kyv}
          />
          <Route
            path="/UX"
            component={Ux}
          />
          <Route
            path="/digitalComerce"
            component={DigitalCommerce}
          />
          <Route
            path="/headless"
            component={Headless}
          />
          <Route
            path="/mobilApplication"
            component={Mobile}
          />
          <Route
            path="/marketting"
            component={Marketing}
          />
        </PageWrapper>
      </Router>
    );
  }
}
export default App;