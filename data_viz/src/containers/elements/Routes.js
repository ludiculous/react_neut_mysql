import { Route, Switch, Redirect, location} from 'react-router-dom';
import React, { Component } from 'react';
import Landing from '../../views/Landing';
import Register from '../../views/Register';

class Routes extends Component {
    constructor(props) {
        super(props);
    }

   render() {
        return (
             <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
            </Switch>
        )
    }
}

export default Routes;
