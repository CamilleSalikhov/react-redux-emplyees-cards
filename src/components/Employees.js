import React, { Component } from 'react';
import Employee from './Employee'
import uuid from 'uuid';
import {Link} from 'react-router-dom'
export default class Employees extends Component {
    
    render() {
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
                <Link to='/add'>Add new employee</Link>
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