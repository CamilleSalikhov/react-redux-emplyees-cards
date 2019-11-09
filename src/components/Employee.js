import React, { Component } from 'react';
import history from '../history';
import './Employee.css'

export default class Employee extends Component {
    
    onError = (e) => {
        e.target.onerror = null;
        e.target.src=this.props.noImage

    }
    
    redirectToTarget = () => {
        history.push(`/${this.props.id}`)
    }

    render() {
        return (
            <div className='frontPageCard' onClick = {this.redirectToTarget}>
                <img  alt='Employee' onError={this.onError} height='200px' src={this.props.img}></img>
                <div className = 'info' style={{width:'70%'}}>
                {this.props.name}<br></br>
                {this.props.job}
                </div>
    
            </div>
        )
    }
}
 

