import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//Views
import Login from './views/Login';
import Home from './views/Home';
import NoMatch from './views/NoMatch';

const AppRoutes = (props) =>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login}/>
                <PrivateRoute exact path="/home" isLogged={false} component={Home}/>
                <Route component={NoMatch}/>
            </Switch>
        </Router>
    )
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        rest.isLogged
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)

export default AppRoutes;