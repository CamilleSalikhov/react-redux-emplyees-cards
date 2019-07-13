import React, { Component } from 'react';
import history from '../history'

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
            <div onClick = {this.redirectToTarget} style = {{display:'flex', flexDirection: 'row', background:'lightBlue', marginTop:'10px', padding:'10px', borderStyle:'solid', borderColor:'grey'}}>
                <div className = 'avatar' style={{width: '30%', overflow: 'hidden',  height:'250px',borderStyle:'solid', borderColor:'grey'}}><img alt='Employee' onError={this.onError} height='200px' src={this.props.img}></img></div>
                <div className = 'info' style={{width:'70%'}}>
                {this.props.name}<br></br>
                {this.props.job}
                </div>
    
            </div>
        )
    }
}
 
 