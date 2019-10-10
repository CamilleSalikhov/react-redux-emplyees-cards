import React, { Component } from 'react';
import {connect} from 'react-redux';
import {postComment, changeHeadStatus, changeCommentStatus, resetButton} from '../reduxRelated/actions';
import uuid from 'uuid'

class Comments extends Component {

    

    disableEnter = e => {
        if (e.key === 'Enter') {
            e.preventDefault();
        };
      }

    handleSubmit = (e) => {
        e.preventDefault();
        let newComment = {
            header: e.target.elements.header.value,
            number: e.target.elements.number.value,
            text: e.target.elements.comment.value,
            location:this.props.id
        }
        this.props.post(newComment);
        e.target.reset()
        
        
    }

    render() {
        let currentComments = this.props.comments[this.props.id].slice(0).reverse().slice(0,5).reverse();
        let renderComments = currentComments.map(e => 
            <div key= {uuid.v4()} style={{backgroundColor:'#F5F7F9', textAlign:'start', marginBottom:'5px'}}>
                <div>User:{e.header}</div>
                <div>Phone number:{e.number}</div>
                <div>Said:{e.text}</div>
            </div>
            )

        return (
            <div>
                Recent comments:
                {renderComments}
                <form onSubmit={this.handleSubmit} style={{display:'flex', flexDirection:'column', marginTop:'20px'}}>
                    <input type='text' onKeyPress={this.disableEnter}  placeholder='Your name' name='header' ></input>
                    <input type='number' onKeyPress={this.disableEnter} placeholder='Your phone number' name='number'></input>
                    <textarea   style={{height:'150px'}} name='comment'></textarea>
                    <button type='submit'>Add comment</button>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    post: postComment
}

const mapStateToProps = state => (
    {
    comments: state.commentsForm
}
)

export default connect(mapStateToProps, mapDispatchToProps)(Comments)