import React, { Component } from 'react';
import './App.css';
import Employees from './components/Employees';
import { Route} from 'react-router-dom';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {fetchEmployees} from './Redux';
import PersonalPage from './components/PersonalPage';

class Container extends Component {


  componentDidMount() {
    this.props.fetchEmployees()
  }


  render() {
    let personalRoutes = this.props.users.map(e => <Route key={uuid.v4()} path={`/${e.id}`} render = {props=>
    <PersonalPage
    info = {e}
     />}
      />)
    return (
       
      <div className="App">
      <header className="App-header">
          sotrudiniki
      </header>
        <Route exact path='/' render = {props => <Employees emp = {this.props.users} />} />
        {personalRoutes}
      </div>
       
    )
  }
}

const mapDispatchToProps = {
  fetchEmployees
}

const mapStateToProps = state => ({
  users: state.main.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);