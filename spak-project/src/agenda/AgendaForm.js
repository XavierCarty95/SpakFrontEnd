import React, { Component } from 'react'

export class AgendaForm extends Component {
    state = {
        post: " ",
        user_id: this.props.users.id,
        likes: 0
 
     }
    handleInput = (evt) => {
        let {name , value} = evt.target
        this.setState({
            [name] : value
        })
      }


      handleSubmit = (evt) => {
        evt.preventDefault()
        this.setState({
            post: " "
        })
        this.props.handleAgendaForm(this.state)
      }
    
    render() {
        
        return (
            <div>
            <h1> Post Agenda </h1>
            <div class="row">
            <form onSubmit = {this.handleSubmit} class="col s12">
             <div class="row">
           <div class="input-field col s12">
           <textarea id="post"  class="materialize-textarea" name="post" value = {this.state.post} onChange={this.handleInput} />

          <label for="textarea1">Textarea</label>
          <input style={{marginLeft: "5px"}}className="btn waves-effect waves-light red darken-2" type="submit" value="Submit"/>
          </div>
         </div>
        </form>
         </div>
          </div>
        
        
       
        )
    }
}

export default AgendaForm
