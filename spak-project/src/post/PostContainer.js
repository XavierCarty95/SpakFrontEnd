import React, { Component } from 'react'
import PostList from './PostList'
import AgendaForm from '../agenda/AgendaForm'
import {withRouter} from 'react-router-dom'

export class PostContainer extends Component {
    state = {

         posts : [] 
    
    
        }

    componentDidMount(){
       fetch('https://secure-crag-72369.herokuapp.com/agenda')
       .then(r => r.json())
       .then(response => {
          this.setState({

            posts : response

          })


       })


    }
    handleAgendaForm = (formInfo) => {

        let copyOfList = {...formInfo}
         fetch("https://secure-crag-72369.herokuapp.com/agenda" , {
    
            method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(copyOfList)
        })
          .then(r => r.json())
          .then(response => {
            
            let List = [...this.state.posts , response]
          this.setState({
              posts: List
          })
    
         })
    }
    updateLike = (id, likes) => {

      fetch(`https://secure-crag-72369.herokuapp.com/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "Application/json"
        },
        body: JSON.stringify({
         likes: likes
        })
      })
        .then(r => r.json())
        .then(updatedList => {
          let copyOfMasterList = this.state.posts.map((singleList) => {
            return (singleList.id === updatedList.id ? updatedList : singleList)
          })
          this.setState({
            posts: copyOfMasterList
          })
        })
  
    }

    deleteForm = (id) => {

      fetch(`https://secure-crag-72369.herokuapp.com/${id}`, {
        method: "DELETE"
     }).then(r => r.json())
    .then((deletedList) => {
      let copyOfMasterList = this.state.posts.filter((singleList) => {
        return singleList.id !== id
      })
      this.setState({
         posts: copyOfMasterList
      })
    })
      
  }

    addCommentToPost = (commentObj) => {
    

     let post = this.state.posts.find(post => {
        return post.id === commentObj.agenda_post.id
        })
    
      console.log(post)
      console.log(commentObj)
       let foundItem = [...post.comments , commentObj]
       let copyOfList = {
         ...post,
         comments: foundItem
       }
  
      let copyOfMaster = this.state.posts.map(singleList => {
        return( singleList.id === copyOfList.id ? copyOfList : singleList)
      })


       this.setState({
         posts: copyOfMaster
       }, () => {
        this.props.history.push("/agenda")
       })
       
    }

    

  
   render() {
      
     return (
            <div>
                <AgendaForm users={this.props.users}  handleAgendaForm={this.handleAgendaForm}/>
                <PostList  posts={this.state.posts} users={this.props.users} addCommentToPost={this.addCommentToPost} updateLike={this.updateLike} deleteForm={this.deleteForm}/>
            </div>
        )
    }
}

export default withRouter(PostContainer)
