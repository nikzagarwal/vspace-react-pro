import React,{Component} from 'react';

import PageWrapper from './Component/PageWrapper.js';
import Home from './Component/Home.js';
import About from './Component/About.js';
import Contact from './Component/Contact.js';
import Gito from './Component/Gito.js';
import Consulting from './Component/Consulting.js';
import MarketPlace from './Component/MarketPlace.js';

import {BrowserRouter as Router,Route,} from "react-router-dom";

class App extends Component{
 

  render(){
    
  return (
    <Router >
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
    </PageWrapper>
    </Router>  
  );
}
}
export default App;