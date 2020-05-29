import React, { Component } from 'react'

export class CommentForm extends Component {
    state = {
      user_id: this.props.users.id,
      agenda_post_id: this.props.post.id,
      comment_text: ""

    }
    handleInput = (evt) => {
        let {name , value} = evt.target
        this.setState({
            [name] : value
        })
      }


      handleSubmit = (evt) => {
        
        this.setState({
          comment_text: ""
        })
        evt.preventDefault()
        this.props.handleComments(this.state)
        
      }
    
    render() {
       console.log(this.state)
        return (
        
            <div>
                 <form onSubmit = {this.handleSubmit}>
                <label htmlFor="comments">
                  Comment
                    <textarea id="comments"  name="comment_text" value = {this.state.comment_text} onChange={this.handleInput} />
                </label>
                <input className="btn waves-effect waves-light red darken-2" type="submit" value="Submit"/>
            </form>
            </div>
        )
    }
}

export default CommentForm
