import React, { Component } from 'react';
import  './carousel.css';
import {connect} from 'react-redux';
import {changePosition} from '../Redux';
import uuid from 'uuid';
import history from '../history'

 class Carousel extends Component {

    handleRedirect = (e) => {
        history.push(`/${e.target.id}`)
    }


    handlePrev = () => {
        let newPosition = this.props.position + 390;
        newPosition = Math.min(newPosition,0);
        this.props.changePosition(newPosition)

    }

    handleNext = () => {
        let newPosition = this.props.position - 390;
        newPosition = Math.max(newPosition, -130 * (this.props.users.length - 3));
        this.props.changePosition(newPosition)


    }

    onError = (e) => {
        e.target.onerror = null;
        e.target.src=this.props.users[0].noimage

    }

     
    render() {
        let images = this.props.users.map(e =>
            <li key={uuid.v4()}><img alt='img' onError={this.onError} id={e.id} onClick={this.handleRedirect} src={e.img}></img></li>
            )
        let marginPos = this.props.position + 'px'

        return (
        <div className="carousel">
        <div className="gallery">
          <ul className="images" style={{marginLeft:marginPos}}>
            {images}
          </ul>
        </div>
        <div>
        <button className="arrowPrev" onClick={this.handlePrev}>⇦</button>
        <button className="arrowNext" onClick={this.handleNext}>⇨</button>
        </div>
      </div>)
    }
}

const mapDispatchToProps = {
changePosition:changePosition
}

const mapStateToProps = state => ({
    users:state.main.users,
    position:state.carouselPosition.position
})

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)