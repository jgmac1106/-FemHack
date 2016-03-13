import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

// var HelloMessage = React.createClass({
//   render: function() {
//     return <div>Hello {this.props.name}</div>;
//   }
// });

// ReactDOM.render(<HelloMessage name="John" />, document.querySelector('#root'));
ReactDOM.render(<App />, document.querySelector('#root'));