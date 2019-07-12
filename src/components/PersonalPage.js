import React, { Component } from 'react';
import Comments from './Comments'

export default class PersonalPage extends Component {
    render() {
        return (
            <div style = {{display:'flex', flexDirection: 'row', background:'lightBlue', marginTop:'10px', padding:'10px', borderStyle:'solid', borderColor:'grey'}}>
                <div className = 'avatar' style={{width: '30%', height:'250px', background:'lightGrey', borderStyle:'solid', borderColor:'grey'}}>{this.props.id}</div>
                <div className = 'info' style={{width:'70%'}}>
                {this.props.info.name}<br></br>
                {this.props.info.company.bs}<br></br>
                {this.props.info.address.city}-{this.props.info.address.street}-{this.props.info.address.suite}
                <Comments />
                </div>
    
            </div>
        )
    }
}
