import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Head extends Component {



    render() {
        let linkVisibility = this.props.error ? 'none' : 'inline-block';
        return (
            <div style={headerStyle}>
                <Link to='/' style={homeStyle} >Employees</Link>
                <Link style={{display:linkVisibility, backgroundColor:'white',height:'40px', textDecoration:'none', textAlign:'center', color:'black', alignSelf:'flex-end', marginTop:'-30px', display:'flex', flexDirection:'column', justifyContent:'center', marginRight:'10px',padding:'0 5px 0 5px'}} to='/add'>Add new employee</Link>
                
            </div>
        )
    }
}

const homeStyle = {
    fontSize: 'calc(10px + 2vmin)',
    textDecoration: 'none',
    color:'white',
    alignSelf:'center'
}

const headerStyle = {
    
    backgroundColor: '#282c34',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    height:'60px'
  }


const mapStateToProps = state => ({
    error:state.main.error
})

export default connect(mapStateToProps, null)(Head);
