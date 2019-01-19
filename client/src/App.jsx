import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurrentUser, logoutUser } from './actions/authActions';

import PrivateRoute from './comps/common/PrivateRoute.jsx';

import NavBar from './comps/NavBar.jsx';
import Footer from './comps/Footer.jsx';
import Landing from './comps/Landing.jsx';
import Register from './comps/auth/Register.jsx';
import Login from './comps/auth/Login.jsx';
import Dashboard from './comps/Dashboard.jsx';
import CreateProfile from './comps/create-profile/CreateProfile.jsx';
import Lenders from './comps/lenders/Lenders.jsx';
import AddTools from './comps/AddTools.jsx';

import * as actions from './actions/actions';
import store from './store/store';

class App extends React.Component {
  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <Router>
        <div className="main-wrapper">
          <Route exact path="/" component={Landing} />

          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/lenders" component={Lenders} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/create-profile" component={CreateProfile} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/add-tools" component={AddTools} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => state.stories;

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchStories: actions.fetchStories,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
