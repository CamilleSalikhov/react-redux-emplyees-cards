import React, { Component } from 'react';
import uuid from 'uuid';
import {addEmployee, addNewUserComments, changeCurrentPage} from '../reduxRelated/actions'
import { connect } from 'react-redux';
import history from '../history';
import './NewEmployee.css'

class NewEmployee extends Component {
    

    handleSubmit = (e) => {
        e.preventDefault();
        let newEmpObj = {
            id:uuid.v4(),
            name:e.target.elements.name.value,
            occupation:e.target.elements.occupation.value,
            address:e.target.elements.address.value,
            img:e.target.elements.image.value,
            noimage:'https://imageog.flaticon.com/icons/png/512/36/36601.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'
        }
        this.props.newEmployee(newEmpObj);
        this.props.newComments(newEmpObj.id)

        history.push('/')

        let lastPage = Math.ceil((this.props.users.length + 1) / 5);
        this.props.changeCurrentPage(lastPage)

    }

    render() {
        return (
            <div>
                <p className ='formLabel'>Add new employee</p>
                <form className='newUserForm' onSubmit={this.handleSubmit}>
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
    newComments:addNewUserComments,
    changeCurrentPage
}

const mapStateToProps = (state) => (
    {
        users:state.main.users
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(NewEmployee)