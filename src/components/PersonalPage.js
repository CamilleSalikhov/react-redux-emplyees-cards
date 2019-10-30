import React, { Component } from 'react';
import Comments from './Comments';
import Carousel from './Carousel';
import './PersonalPage.css'

export default class PersonalPage extends Component {

    onError = (e) => {
        e.target.onerror = null;
        e.target.src=this.props.info.noimage
       
    }

    render() {
        return (
            <React.Fragment>
            <div className='personalPageContainer'>
                <Carousel info ={this.props.info} />
                <div className='personalCard'>
                    <img alt='emp'  onError={this.onError} height='200px' src={this.props.info.img}></img>
                    <div>
                    <div className='info'>
                    {this.props.info.name}<br></br>
                    {this.props.info.occupation}<br></br>
                    {this.props.info.address}
                    </div>
                    </div>
                </div>
                <Comments id = {this.props.info.id} />
            </div>
            <footer>
                <p>GitHub: <a href='https://github.com/CamilleSalikhov'>/CamilleSalikhov</a></p>
            </footer>
        
            </React.Fragment>
        )
    }
}




