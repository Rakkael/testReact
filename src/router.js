import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App'

export default class RouterMap extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={"/"} component={App} />
                    <Route exact path={"/test/:params"} component={App} />
                </Switch>
            </Router>
        )
    }
}