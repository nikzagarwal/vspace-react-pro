import React,{Component} from 'react';

import PageWrapper from './Component/PageWrapper.js';
import Home from './Component/Home.js';
import About from './Component/About.js';
import Contact from './Component/Contact.js';
import Gito from './Component/Gito.js';

import {BrowserRouter as Router,Route,} from "react-router-dom";

class App extends Component{
 

  render(){
    
  return (
    <Router basename={'/vspace-react-pro'}>
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
    </PageWrapper>
    </Router>  
  );
}
}
export default App;