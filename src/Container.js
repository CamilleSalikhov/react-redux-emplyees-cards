import React, { Component } from 'react';
import Employees from './components/Employees';
import { Route, Switch} from 'react-router-dom';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {fetchEmployees, finishLoad} from './reduxRelated/actions';
import PersonalPage from './components/PersonalPage';
import NewEmployee from './components/NewEmployee';
import Head from './components/Head';
import './Container.css'

class Container extends Component {


  componentDidMount() {

    if(!this.props.users[0]) {
      this.props.fetchEmployees();
      this.props.finishLoad()
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
        <Route exact path='/' render = {props => <Employees />} />
        <Route path='/newEmployee' component={NewEmployee}/>
        {personalRoutes}
        <Route render={() => <h2>Page not found!</h2>} />
        </Switch>
        </div>
       
    )
  }
}



const mapDispatchToProps = {
  fetchEmployees,
  finishLoad
}

const mapStateToProps = state => ({
  users: state.main.users,
  error: state.main.error,
  loading:state.main.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);


