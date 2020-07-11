import React, { Component } from 'react'
import CommentForm from '../comments/CommentForm'

export class Post extends Component {

  

  handleComments = (comment) => {
        fetch("https://secure-crag-72369.herokuapp.com/comments", {
         method: "POST",
         headers: {
           "content-type": "application/json"
         },
         body: JSON.stringify(comment)
        })
        .then(r => r.json())
        .then(response => {
            console.log(response)
            this.props.addCommentToPost(response)

        })
            

    
   }


   deleteForm = (evt) => {

    this.props.deleteForm(this.props.post.id)

   }
     

   updateLike = (evt) => {
      const likes = this.props.post.likes + 1
       this.props.updateLike(this.props.post.id , likes)
   }
    




        render() {
            console.log(this.props.post.likes)
        
        return (
            
            <div className = "container">
                
                <h1> Agenda </h1>
                Posted By: <span> Bro {this.props.post.user.first_name} {this.props.post.user.last_name} </span>
                <p>{this.props.post.post}</p>
                <span>{this.props.post.likes}<span onClick={this.updateLike} role="img"> ❤️ </span> </span>
                <div class="divider"></div>
                {this.props.post.user.username === this.props.users.username? <button onClick={this.deleteForm} className = "btn waves-effect waves-light red darken-2" style={{marginTop:"5px"}}> Delete</button> : null }
                 
                 <div class="section">
                <h5> Comments</h5>
                <p> {this.props.post.comments.map(comment => {
                   
                    return ( <div key = {comment.id}> <strong>{comment.user.username}</strong>: {comment.comment_text} </div>)
                    })
                 }
              </p>
              <div class="divider"></div>
            </div>
         <CommentForm handleComments = {this.handleComments} users={this.props.users} post={this.props.post}  />
            </div>
        )
    }
}

export default Post
