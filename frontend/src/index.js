import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router} from 'react-router-dom'
import App from "./app";
import Home from "./Home";
import SignIn from "./SignIn";

const routing = (
    <Router>
        <div>
            <Route path="/" component={App}></Route>
            <Route path="/" component={Home}></Route>
            <Route path="/login" component={SignIn}></Route>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));