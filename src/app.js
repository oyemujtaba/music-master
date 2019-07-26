import React, { Component } from 'react';
import Routes from './Routes';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { _getMe } from './actions';

class App extends Component {

    componentWillMount() {
        this.props.actions._getMe()
    }

    render() {
        const { auth } = this.props;
        let isLogin = () => {
            return auth.user && auth.user._id ? true : false;
        }
        return (
            <div>
                <Router >
                    {
                        Routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={() => {
                                    if (route.private && isLogin()) {
                                        return route.component();
                                    } else if (route.private && !isLogin()) {
                                        return <Redirect to={{
                                            pathname: '/login'
                                        }} />
                                    } 
                                     else if (!route.private) {
                                        if (isLogin()) {
                                            return <Redirect to={{
                                                pathname: '/home'
                                            }} />
                                        } else {
                                            return route.component();
                                        }
                                    }
                                    else if (!route.path){
                                        return <Redirect 
                                        to={{
                                            pathname: '/home'
                                        }}
                                        />
                                    }
                                }}
                            />
                        ))
                    }

                </Router>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            _getMe
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);