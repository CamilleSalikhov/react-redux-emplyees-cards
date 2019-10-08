import React, { Component } from 'react';
import './App.css';
import Employees from './components/Employees';
import { Route} from 'react-router-dom';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {fetchEmployees} from './reduxRelated/actions';
import PersonalPage from './components/PersonalPage';
import Add from './components/Add'

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
        <header style={headerStyle}>
          <p>Employees</p>
        </header>
        
        <Route exact path='/' render = {props => <Employees emp = {this.props.users} />} />
        <Route path='/add' component={Add}/>
        {personalRoutes}
        <footer style={{height:'70px', backgroundColor:'#F5F7F9', marginTop:'10px', textAlign:'center', display:'flex', alignItems:'center', justifyContent:'center'}}>ФУТЕР ФУТЕР ФУТЕР ФУТЕР ФУТЕР </footer>
      </div>
       
    )
  }
}


const headerStyle = {
    
  backgroundColor: '#282c34',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
  height: '50px'
}

const mapDispatchToProps = {
  fetchEmployees
}

const mapStateToProps = state => ({
  users: state.main.users,
  error: state.main.error
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);


