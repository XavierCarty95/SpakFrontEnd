import React from 'react'
import Member from './Member'

export default function MemberList(props) {

    const listOfMembers = props.members.map(member => {
        console.log(member)
       return (<div key={member.id}><Member members={member} /></div>)
    })
    return (
        
            <div className = "container" style = {{height: "100%"}}>
            <div className="ui three column grid container">
                 {listOfMembers}
            </div>
      
           
        </div>
    )
}
