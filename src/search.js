'use strict';

// document.write('search page');
// var f = () => document.write('Hello ES6');

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import webpackLogo from './images/webpack.png';

class Search extends React.Component {

    render() {
        return <div className="search-text">
            搜索文字 <img src={webpackLogo}/>
            </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);