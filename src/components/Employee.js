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
            <div onClick = {this.redirectToTarget} style = {containerStyle}>
                <img style = {imageStyle} alt='Employee' onError={this.onError} height='200px' src={this.props.img}></img>
                <div className = 'info' style={{width:'70%'}}>
                {this.props.name}<br></br>
                {this.props.job}
                </div>
    
            </div>
        )
    }
}
 

const containerStyle = {
    display:'flex',
    cursor:'pointer',
    flexDirection: 'row',
    background:'#D0EEE6',
    marginBottom:'10px',
    padding:'10px',
    marginLeft:'20px'
}



const imageStyle = {
    width:'200px',
  height:'200px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginLeft: '20px'
}