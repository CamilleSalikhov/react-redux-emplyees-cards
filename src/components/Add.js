import React, { Component } from 'react';
import uuid from 'uuid';
import {addEmployee, addNewUserComments} from '../reduxRelated/actions'
import { connect } from 'react-redux';
import history from '../history'

class Add extends Component {
    

    handleSubmit = (e) => {
        e.preventDefault();
        let newEmpObj = {
            id:uuid.v4(),
            name:e.target.elements.name.value,
            occupation:e.target.elements.occupation.value,
            address:e.target.elements.address.value,
            img:e.target.elements.image.value,
            noimage:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1024px-Icon-round-Question_mark.svg.png'
        }
        this.props.newEmployee(newEmpObj);
        this.props.newComments(newEmpObj.id)

        history.push('/')
    }

    render() {
        return (
            <div>
                Add new employee
                <form onSubmit={this.handleSubmit} style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'20px'}}>
                    <input type='text' placeholder='Full name' name='name' ></input>
                    <input type='text' placeholder='Occupation' name='occupation' ></input>
                    <input type='text' placeholder='Address' name='address' ></input>
                    <input type='text' placeholder='Image link' name='image' ></input>
                    <button type='submit'>submit</button>

                </form>
            </div>
        
        )
    }
}

const mapDispatchToProps = {
    newEmployee: addEmployee,
    newComments:addNewUserComments
}

export default connect(null,mapDispatchToProps)(Add)