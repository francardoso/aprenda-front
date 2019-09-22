import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { SERVER_URL } from '../../../settings';
// Redux actions
import { setIsLogged } from '../commons/actions/login';

//Views
import Login from '../commons/views/Login';
import NoMatch from '../commons/views/NoMatch';
import Lessons from './views/Lessons';
import Lesson from './views/Lesson';

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
                <Route exact path="/" component={Login}/>
                <PrivateRoute exact path="/lessons" isLogged={isLogged} component={Lessons}/>
                <PrivateRoute exact path="/lessons/:idLesson" isLogged={isLogged} component={Lesson}/>
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