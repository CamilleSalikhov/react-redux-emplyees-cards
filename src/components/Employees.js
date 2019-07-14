import React, { Component } from 'react';
import Employee from './Employee'
import uuid from 'uuid';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

class Employees extends Component {
    
    render() {
        let error = this.props.error ? 'block' : 'none';
        let linkVisibility = this.props.error ? 'none' : 'inline'
        let employees = this.props.emp.map(e =>
        <Employee
        key = {uuid.v4()}
        name = {e.name}
        job = {e.occupation}
        id = {e.id}
        img = {e.img}
        noImage={e.noimage}
         />)
        return (
            <div>
                <div style={headerStyle}>Employees</div>
                <Link style={{display:linkVisibility}} to='/add'>Add new employee</Link>
                <div style={{display:error}}>We couldn't connect to the server <br></br>
                Try again.
                </div>
                {employees}
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
  color: 'white'
}

const mapStateToProps = state => ({
    error:state.main.error
})

export default connect(mapStateToProps, null)(Employees)