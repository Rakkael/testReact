import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './index'

export default class RouterMap extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/:params" component={Index} />
                </Switch>
            </Router>
        )
    }
}