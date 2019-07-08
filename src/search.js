'use strict';

// document.write('search page');
// var f = () => document.write('Hello ES6');

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';

class Search extends React.Component {

    render() {
        return <div className="search-text">Search Text</div>;;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);