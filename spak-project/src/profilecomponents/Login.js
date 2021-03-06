import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Login extends Component {
    state = {
        username: "",
        // email: "",
        password: "",
      }

      handleInput = (evt) => {
        let {name , value} = evt.target
        this.setState({
            [name] : value
        })
      }


      handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.handleLogin(this.state)
      }
    
    render() {
        return (
            <div style= {{height: "100%"}}>
            
            <h1 className="center-align">Sign In</h1>
              <form  style = {{marginLeft: "350px" , marginTop: "70px"}}className="col s12 " onSubmit = {this.handleSubmit}> 
                <div className="row ">
              <div className="input-field col s6">
              <input className="validate" type = "text" autoComplete="off" name="username" value = {this.state.username} onChange={this.handleInput} />
              <label htmlFor="username">Username</label>
              </div>
              </div>
          <div class="row">
        <div class="input-field col s6">
        <input type = "password" autoComplete="off" name="password" value = {this.state.password} onChange={this.handleInput} />
          <label for="password">Password</label>
        </div>
      </div>
     Member's Don't Have An Account ? <button className="btn waves-effect waves-light red darken-2"><NavLink style={{textDecoration: "none" , color:"white"}} to="/register">Register</NavLink></button> 
      <input className="btn waves-effect waves-light red darken-2" style={{marginLeft: "5px"}} type="submit" value="Submit"/>
    </form>
   </div>
    
    

        )
    }
}

export default Login
