import React, { Component } from 'react';
import './App.css';
import Employees from './components/Employees';
import { Route, Switch} from 'react-router-dom';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {fetchEmployees} from './reduxRelated/actions';
import PersonalPage from './components/PersonalPage';
import NewEmployee from './components/NewEmployee';
import Head from './components/Head'

class Container extends Component {


  componentDidMount() {

    if(!this.props.users[0]) {
      this.props.fetchEmployees()
    }
  }


  render() {
    let personalRoutes = this.props.users.map(e => <Route key={uuid.v4()} path={`/${e.id}`} render = {props=>
    <PersonalPage
    info = {e}
     />}
      />)
    return (
       
      <div className="App">
        <Head />
        <Switch>
        <Route exact path='/' render = {props => <Employees emp = {this.props.users} />} />
        <Route path='/add' component={NewEmployee}/>
        {personalRoutes}
        <Route render={() => <h2>Page not found!</h2>} />
        </Switch>
        </div>
       
    )
  }
}



const mapDispatchToProps = {
  fetchEmployees
}

const mapStateToProps = state => ({
  users: state.main.users,
  error: state.main.error
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);


