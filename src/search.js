'use strict';

// document.write('search page');
// var f = () => document.write('Hello ES6');

import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {

    render() {
        return <div>Search Text</div>;;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);