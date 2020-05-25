import React from 'react'

export default function Members(props) {
    console.log(props)
    return (
        <div>
  
      {props.members.map(member => {
        
         return ( <div>
             <p> {member.first_name} </p>  

             <p> {member.initiation_year}</p>
             </div>
             )
            })
     }

        </div>
    )
}
