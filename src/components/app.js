import React from 'react';
import { Component } from 'react';

import Navbar from './navbar'
import Landing from './landing'
import About from './about'
import Contact from './contact'
import Description from './description'
import ImageDiv from './image_div'
import Footer from './footer'
import Challenge from './challenge'
import Schedule from './schedule'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Landing />
        <Description />
        <Challenge />
        <About />
        <Schedule />
        <Contact/>
        <Footer/>
      </div>
    )
  }
}
