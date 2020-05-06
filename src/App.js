import React from 'react';
import './App.css';


import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import OurProjects from './pages/OurProjects';
import Riviera from './pages/Riviera';
import ContactUs from './pages/ContactUs';
import SingleProject from './pages/SingleProject';
import SingleRoom from './pages/SingleRoom'

import {Route, Switch} from 'react-router-dom';


import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer'
// import {Carousel} from 'react-boostrap';


function App() {
  return (
    <>
    <Navbar/>
   
    <Switch>
    <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/ourprojects/" component={OurProjects}/>
      <Route exact path="/rooms/:slug" component={SingleRoom}/>
      <Route exact path="/riviera" component={Riviera}/>
      <Route exact path="/contactus" component={ContactUs}/>
      {/* <Route exact path="/singleproject" component={SingleProject}/> */}
      <Route component={Error}/>
    </Switch>
 <Footer/>

    </>
  );
}

export default App;
