import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Head.css'

class Head extends Component {



    render() {
        let linkVisibility = this.props.error ? 'none' : 'flex';
        return (
            <div className='header'>
                <Link to='/' className='homeLink' >Employees</Link>
                <Link className='newUserButton' style={{display:linkVisibility}} to='/newEmployee'>Add new employee</Link>
                
            </div>
        )
    }
}





const mapStateToProps = state => ({
    error:state.main.error
})

export default connect(mapStateToProps, null)(Head);
