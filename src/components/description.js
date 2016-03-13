import React from 'react';

var Description = React.createClass({
    render: function() {
        return(
            <div className="container">
                <h2>// Our Flow</h2>
                <ul>
                    <li>Line</li>
                    <li>Line</li>
                    <li>Line</li>
                    <li>Line</li>
                    <li>Line</li>
                </ul>
                <a href="#about" className="btn btn-circle page-scroll">
                    <i className="fa fa-angle-double-down animated"></i>
                </a>
            </div>
        );
    }
});

module.exports = Description;