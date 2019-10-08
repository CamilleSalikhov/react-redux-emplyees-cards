import React, { Component } from 'react';
import Employee from './Employee'
import uuid from 'uuid';

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
            <div className='rowGrid' style={{display:'flex', flexDirection:'row', marginTop:'15px'}}> 
            <div className='description' style={{flexBasis:'30%', height:'80vh', backgroundColor:'#F5F7F9' }}>
                <p style={{textAlign:'start'}}>Cards to the right are clickable!
                You can also add new employees!<br></br>Top right
                </p>
            </div>           
            <div className='cards' style={{display:'flex', flexDirection: 'column', width: '100%'}}>
                <div style={{display:error}}>We couldn't connect to the server <br></br>
                Try again.
                </div>
                {employees}
            </div>
            </div>
            <footer style={{height:'70px', backgroundColor:'#F5F7F9', textAlign:'center', display:'flex',flexDirection:'column', justifyContent:'center'}}><p>GitHub: <a href='https://github.com/CamilleSalikhov'>/CamilleSalikhov</a></p></footer>
            </React.Fragment>
        )
    }
}


