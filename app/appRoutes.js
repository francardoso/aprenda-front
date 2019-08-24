import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { SERVER_URL } from '../settings';
// Redux actions
import { setIsLogged } from './actions/login';

//Views
import Login from './views/Login';
import Home from './views/Home';
import NoMatch from './views/NoMatch';

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
    if(ans.isLogged){
        _setIsLogged(ans);
    }
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
                <Route exact path="/" component={Login}/>
                <PrivateRoute exact path="/home" isLogged={isLogged} component={Home}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes);