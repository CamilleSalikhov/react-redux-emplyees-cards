import React, { Component } from 'react';
import Comments from './Comments';
import {Link} from 'react-router-dom';
import Carousel from './Carousel'

export default class PersonalPage extends Component {

    onError = (e) => {
        e.target.onerror = null;
        e.target.src=this.props.info.noimage
       
    }

    render() {
        return (
            <React.Fragment>
                <Link to='/'>Home</Link> | <Link to='add'>Add new employee</Link>
                <div style={{display:'flex', flexDirection:'column'}}>
                <Carousel info ={this.props.info} />
                </div>
            <div style = {{display:'flex', flexDirection: 'row', background:'lightBlue', marginTop:'10px', padding:'10px'}}>
            <div className = 'avatar' style={{width: '30%', overflow: 'hidden',  height:'250px',borderStyle:'solid', background:'white', borderColor:'grey'}}><img alt='emp' onError={this.onError} height='200px' src={this.props.info.img}></img></div>
                <div className = 'info' style={{width:'70%'}}>
                <div style={{marginBottom:'200px', textAlign:'start'}}>
                {this.props.info.name}<br></br>
                {this.props.info.occupation}<br></br>
                {this.props.info.address}
                </div>
                <Comments id = {this.props.info.id} />
                </div>
            </div>
            </React.Fragment>
        )
    }
}

 