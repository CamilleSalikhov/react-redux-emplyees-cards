import React, { Component } from 'react';
import Employee from './Employee'
import uuid from 'uuid';
import './Employees.css';
import Paginate from './Paginate';
import {connect} from 'react-redux'

class Employees extends Component {
    
    render() {
        let error = this.props.error ? 'block' : 'none';

        let indexOfLastPost = this.props.currentPage * 5;
        let indexOfFirstPost = indexOfLastPost - 5;
        let currentPosts = this.props.users.slice(indexOfFirstPost, indexOfLastPost)
    
        let employees = currentPosts.map(e =>
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
            <div className='rowGrid'> 
            <div className='description'>
                <p>Cards to the right are clickable!
                You can also add new employees!<br></br>Top right
                </p>
            </div>           
            <div className='cards'>
                <div style={{display:error}}>We couldn't connect to the server <br></br>
                Try again.
                </div>
                {employees}
                <Paginate  />
            </div>
            </div>
            <footer className='cardsFooter'><p>GitHub: <a href='https://github.com/CamilleSalikhov'>/CamilleSalikhov</a></p></footer>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => (
    {
        users: state.main.users,
        currentPage: state.main.currentPage,
        loading:state.main.loading
    }
)

export default connect(mapStateToProps, null)(Employees)