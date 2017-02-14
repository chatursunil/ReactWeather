const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');

//Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}></Route>
            <Route path="examples" component={Examples}></Route>
            <IndexRoute component={Weather}></IndexRoute>
        </Route>
    </Router>,
    document.getElementById('app')
);