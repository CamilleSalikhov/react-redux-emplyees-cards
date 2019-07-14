import React, { Component } from 'react';
import {connect} from 'react-redux';
import {postComment, changeHeadStatus, changeCommentStatus, resetButton} from '../reduxRelated/actions';
import uuid from 'uuid'

class Comments extends Component {

    componentWillUnmount() {
        this.props.resetButton()

    }


    handleComment = (e) => {
        if(e.target.value.length > 128) {
            this.props.changeCommentStatus(true)
        } else {
            this.props.changeCommentStatus(false)
        }
    }

    
    handleHead = (e) => {
        if(e.target.value.length < 5 || e.target.value.length > 80) {
            this.props.changeHeadStatus(true)
        } else {
            this.props.changeHeadStatus(false)
        }
    }

    disableEnter = e => {
        if (e.key === 'Enter') e.preventDefault();
      }

    handleSubmit = (e) => {
        e.preventDefault();
        let newComment = {
            header: e.target.elements.header.value,
            number: e.target.elements.number.value,
            text: e.target.elements.comment.value,
            location:this.props.id
        }
        this.props.post(newComment)
        
        
    }

    render() {
        let currentComments = this.props.comments[this.props.id].slice(0).reverse().slice(0,4);
        let renderComments = currentComments.map(e => 
            <div key= {uuid.v4()} style={{borderStyle:'solid', textAlign:'start', marginBottom:'5px'}}>
                <div>Header:{e.header}</div>
                <div>Number:{e.number}</div>
                <div>{e.text}</div>
            </div>
            )

        return (
            <div>
                {renderComments}
                <form onSubmit={this.handleSubmit} style={{display:'flex', flexDirection:'column', marginTop:'20px'}}>
                    <input type='text' onKeyPress={this.disableEnter} onChange={this.handleHead} placeholder='Header' name='header' ></input>
                    <input type='number' onKeyPress={this.disableEnter} placeholder='Your phone number' name='number'></input>
                    <textarea  onChange={this.handleComment} style={{height:'50px'}} name='comment'></textarea>
                    <button type='submit' disabled={this.props.headStatus || this.props.commentStatus}>submit</button>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    post: postComment,
    changeHeadStatus:changeHeadStatus,
    changeCommentStatus:changeCommentStatus,
    resetButton:resetButton
    

}

const mapStateToProps = state => (
    {
    comments: state.commentsForm,
    headStatus:state.buttonStatus.headStatus,
    commentStatus:state.buttonStatus.commentStatus,
    
}
)

export default connect(mapStateToProps, mapDispatchToProps)(Comments)