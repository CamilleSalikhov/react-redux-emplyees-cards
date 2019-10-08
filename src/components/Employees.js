import React, { Component } from 'react';
import Employee from './Employee'
import uuid from 'uuid';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

class Employees extends Component {
    
    render() {
        let error = this.props.error ? 'block' : 'none';
        let linkVisibility = this.props.error ? 'none' : 'block'
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
            <div className='rowGrid' style={{display:'flex', flexDirection:'row'}}> 
            <div className='description' style={{flexBasis:'30%', height:'80vh', backgroundColor:'#F5F7F9', marginTop:'50px' }}>
                <p style={{textAlign:'start'}}>Справа расположены карточки сотрудников. По ним можно кликнуть.
                </p>
            </div>           
            <div className='cards' style={{display:'flex', flexDirection: 'column', width: '100%'}}>
                <Link style={{display:linkVisibility, backgroundColor:'red', alignSelf:'center', height:'40px', textDecoration:'none', textAlign:'center'}} to='/add'>Add new employee fdshfsgj</Link>
                <div style={{display:error}}>We couldn't connect to the server <br></br>
                Try again.
                </div>
                {employees}
            </div>
            </div>
        )
    }
}



const mapStateToProps = state => ({
    error:state.main.error
})

export default connect(mapStateToProps, null)(Employees)