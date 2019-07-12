import React, { Component } from 'react'

export default class Comments extends Component {


    handleSubmit = (e) => {
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} style={{display:'flex', flexDirection:'column', marginTop:'200px'}}>
                    <div>Add a comment!</div>
                    <input type='texts' placeholder='Your phone number'></input>
                    <textarea style={{height:'50px'}}></textarea>
                    <button type='submit'>submit</button>

                </form>
            </div>
        )
    }
}
