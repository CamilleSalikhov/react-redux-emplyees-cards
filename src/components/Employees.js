import React, { Component } from 'react';
import Employee from './Employee'
import uuid from 'uuid';
export default class Employees extends Component {
    
    render() {
        let employees = this.props.emp.map(e =>
        <Employee
        key = {uuid.v4()}
        name = {e.name}
        job = {e.company.bs}
        id = {e.id}
         />)
        return (
            <div>
                {employees}
            </div>
        )
    }
}
