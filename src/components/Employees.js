import React, { Component } from 'react';
import Employee from './Employee'
import uuid from 'uuid';
import './Employees.css'
export default class Employees extends Component {
    
    render() {
        let error = this.props.error ? 'block' : 'none';
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
            <React.Fragment>
            <div className='rowGrid'> 
            <div className='description'>
                <p>Cards to the right are clickable!
                You can also add new employees!<br></br>Top right
                </p>
            </div>           
            <div className='cards'>
                <div style={{display:error}}>We couldn't connect to the server <br></br>
                Try again.
                </div>
                {employees}
            </div>
            </div>
            <footer className='cardsFooter'><p>GitHub: <a href='https://github.com/CamilleSalikhov'>/CamilleSalikhov</a></p></footer>
            </React.Fragment>
        )
    }
}


