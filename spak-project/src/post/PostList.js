import React from 'react'
import Post from './Post'

export default function PostList(props) {

console.log(props.posts)
    const listOfPost = props.posts.map((post ,index) => {
        return <Post key = {index} post = {post}  users={props.users} addCommentToPost={props.addCommentToPost} deleteForm={props.deleteForm} updateLike={props.updateLike}/>

    })
    
    return (
        
        <div>
        {listOfPost}
        </div>
    )
}
