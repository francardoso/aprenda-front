import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { SERVER_URL } from '../../../settings';

import { setIsLogged } from '../commons/actions/login';

//Views
import Lessons from './views/Lessons';
import Index from './views/Index';
import NoMatch from '../commons/views/NoMatch';

const mapDispatchToProps = dispatch =>({
    _setIsLogged: loginData => dispatch(setIsLogged(loginData)),
});

const mapStateToProps = state =>({
    isLogged: state.loginReducer.isLogged,
});

async function checkIfIsLogged(_setIsLogged){
    const response = await fetch(`${SERVER_URL}/isLogged`, {
        method: 'GET',
        credentials:'include',
    });
    const ans = await response.json();
    _setIsLogged(ans);
}

const AppRoutes = ({isLogged, _setIsLogged}) =>{
    useEffect(()=>{
        checkIfIsLogged(_setIsLogged);
    },[]);
    if(isLogged === null){
        return <div></div>
    }
    return(
        <Router>
            <Switch>
                <Route exact path="/professor" component={Index}/>
                <PrivateRoute exact path="/professor/lessons" isLogged={isLogged} component={Lessons}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(AppRoutes);