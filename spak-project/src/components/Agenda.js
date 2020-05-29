import React, { Component } from 'react'
import PostContainer from '../post/PostContainer'


class Agenda extends Component {

    render() {
        return (
            <div>
            
             <PostContainer users={this.props.users} handleComment={this.handleComments}/>
              
            </div>
        )
    }
}

export default Agenda
