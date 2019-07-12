import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import {redirectTo} from '../Redux'
import { connect } from 'react-redux';

class Employee extends Component {

    handleClick = () => {
        this.props.redirecting(this.props.id)
    }

    render() {
        let shouldRedirect = this.props.ifRedirect ? <Redirect to = {this.props.to} /> : null
        return (
            <div onClick = {this.handleClick} style = {{display:'flex', flexDirection: 'row', background:'lightBlue', marginTop:'10px', padding:'10px', borderStyle:'solid', borderColor:'grey'}}>
                {shouldRedirect}
                <div className = 'avatar' style={{width: '30%', height:'250px', background:'lightGrey', borderStyle:'solid', borderColor:'grey'}}>{this.props.id}</div>
                <div className = 'info' style={{width:'70%'}}>
                {this.props.name}<br></br>
                {this.props.job}
                </div>
    
            </div>
        )
    }
}

const mapDispatchToProps = {
    redirecting: redirectTo
}

const mapStateToProps = (state) => ({
    ifRedirect:state.ifRedirect.redirect,
    to:state.ifRedirect.to
})

export default connect(mapStateToProps, mapDispatchToProps)(Employee)
 