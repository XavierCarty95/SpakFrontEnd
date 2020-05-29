import React, { Component } from 'react'
import MemberList from './MemberList'

export class Members extends Component {
   
    state = {
        members: []
    }


    componentDidMount(){
        fetch("http://localhost:4000/users")
            .then(r => r.json())
            .then(response => {
                this.setState({
                    members: response
                })
            })
    }
    render() {
        console.log(this.state.members)
        return (
            <div>
                <h1 className = "center-align">Members</h1>
                <MemberList members={this.state.members}/>
            </div>
        )
    }
}

export default Members

