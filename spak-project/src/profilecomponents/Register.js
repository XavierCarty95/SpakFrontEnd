import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
class Register extends Component {
    state = {
    
    username:"",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    initiation_year:"",
    position: "",
    image: "",
    secret: ""
  }


  handleInput = (evt) => {
    let {name , value} = evt.target
    this.setState({
        [name] : value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.handleRegister(this.state)
  }
    render() {
        return (
            <div className="container">
                <h1 className ="center-align"> Sign In</h1>
                <form onSubmit = {this.handleSubmit}>
                <label htmlFor="username">
                 Username 
                <input type = "text" placeholder="enter your username"  name="username" value = {this.state.username} onChange={this.handleInput} />
                </label>
                <label htmlFor="email">
                 Email
                    <input type = "text" placeholder="enter your email"  name="email" value = {this.state.email} onChange={this.handleInput} />
                </label>
                 Password
                <label htmlFor="password">
                    <input type = "password" placeholder="enter your password" name="password" value = {this.state.password} onChange={this.handleInput} />
                </label>
               
                <label htmlFor="first_name">
                First Name
                    <input type = "text" placeholder="enter your first name"   name="first_name" value = {this.state.first_name} onChange={this.handleInput} />
                </label>
                <label htmlFor="last_name">
                Last Name
                    <input type = "text" placeholder="enter your last name"  name="last_name" value = {this.state.last_name} onChange={this.handleInput} />
                </label>
                <label htmlFor="initiation_year">
                    <input type = "text" placeholder="enter your initiation year"  name="initiation_year" value = {this.state.initiation_year} onChange={this.handleInput} />
                </label>
                <label htmlFor="position">
                 Position
                    <input type = "text" placeholder="position"  name="position" value = {this.state.position} onChange={this.handleInput} />
                </label>
                <label htmlFor="image">
                    Image
                    <input type = "text" placeholder="image" autoComplete="off" name="image" value = {this.state.image} onChange={this.handleInput} />
                </label>
                <label htmlFor="secret">
                    Secret
                    <input type = "password" placeholder="secret" autoComplete="off" name="secret" value = {this.state.secret} onChange={this.handleInput} />
                </label>
                <button className="btn waves-effect waves-light red darken-2" ><NavLink to="/login" style={{textDecoration: "none" , color:"white"}}>Sign In</NavLink></button> 
                <input style={{marginLeft: "5px"}}className="btn waves-effect waves-light red darken-2" type="submit" value="Submit"/>
             </form>
            </div>
        )
    }
}

export default Register
