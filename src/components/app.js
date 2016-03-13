import React from 'react';
import NavBar from './navbar';
import Header from './header';
import Description from './description';
// import Details from './details';

// var App = 
var App = React.createClass({
  render: function() {
    return (
    	<div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
    		<NavBar/>
    		<Header/>
    		<Description/>
    	</div>
    );
  }
});

module.exports = App;