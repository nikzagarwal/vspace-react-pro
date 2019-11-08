import React,{Component} from 'react';
import PageWrapper from './Component/PageWrapper.js';
import Home from './Component/Home.js';
import About from './Component/About.js';
import Contact from './Component/Contact.js';
import Gito from './Component/Gito.js';

import {BrowserRouter as Router,Route,  Link} from "react-router-dom";

class App extends Component{
 

  render(){
    
  return (
    <Router>
    <PageWrapper>
      <Route
      exact={true}
      path="/vspace-react-pro/"
      component={Home}
      />
      <Route
      
      path="/"
      component={Home}
      />
    <Route
      path="/Home"
      component={About}
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