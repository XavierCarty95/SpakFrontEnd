import React from 'react'
import Member from './Member'

export default function MemberList(props) {

    const listOfMembers = props.members.map(member => {
        console.log(member)
       return (<div key={member.id}><Member members={member} /></div>)
    })
    return (
        <div>
            {listOfMembers}
        </div>
    )
}
