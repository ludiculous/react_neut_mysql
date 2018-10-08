import { Route, Switch, Redirect, location} from 'react-router-dom';
import React, { Component } from 'react';
import Landing from '../../views/Landing';
import Ar_Info from '../../views/Ar_Info';
import Forex_Info from '../../views/Forex_Info';
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
                <Route exact path="/arinfo" component={Ar_Info} />
                <Route exact path="/Forex_Info" component={Forex_Info} />
            </Switch>
        )
    }
}

export default Routes;
