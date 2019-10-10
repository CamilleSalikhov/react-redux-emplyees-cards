import React, { Component } from 'react';
import Comments from './Comments';
import Carousel from './Carousel'

export default class PersonalPage extends Component {

    onError = (e) => {
        e.target.onerror = null;
        e.target.src=this.props.info.noimage
       
    }

    render() {
        return (
            <React.Fragment>
            <div style={{display:'flex', flexDirection:'column'}}>
               
                <div style={{display:'flex', flexDirection:'column'}}>
                <Carousel info ={this.props.info} />
                </div>
            <div style = {containerStyle}>
                <img alt='emp' style={imgStyle} onError={this.onError} height='200px' src={this.props.info.img}></img>
                <div className = 'info' style={{width:'70%'}}>
                <div style={{textAlign:'start'}}>
                {this.props.info.name}<br></br>
                {this.props.info.occupation}<br></br>
                {this.props.info.address}
                </div>
                </div>
            </div>
            <Comments id = {this.props.info.id} />
            </div>
            <footer style={{height:'70px', backgroundColor:'#F5F7F9', marginTop:'10px', textAlign:'center', display:'flex',flexDirection:'column', justifyContent:'center'}}>
                <p>GitHub: <a href='https://github.com/CamilleSalikhov'>/CamilleSalikhov</a></p>
            </footer>
        
            </React.Fragment>
        )
    }
}

const imgStyle = {
    width:'200px',
  height:'200px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginLeft: '20px'
}

const containerStyle = {
    display:'flex',
    cursor:'pointer',
    flexDirection: 'row',
    background:'#D0EEE6',
    marginBottom:'10px',
    padding:'10px',
}

