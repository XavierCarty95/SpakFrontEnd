import React, { Component } from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import History from './components/History'
import Members from './components/Members'
import Register from './profilecomponents/Register'
import {withRouter} from 'react-router-dom'
import Login from './profilecomponents/Login'
import Agenda from "./components/Agenda"
import Footer from './components/Footer'


export class App extends Component {
  
  state = {
    user: {
      id: 0, 
      username: "",
      position: "",
      initation_year: "",
      image: ""
    },
    token: ""
  }
  componentDidMount(){

     if(localStorage.token){
       
      fetch("https://secure-crag-72369.herokuapp.com/stay_logged_in", {
           headers : {
             "Authorization": localStorage.token
           }
      })
      .then(r => r.json())
      .then(response => {
         if(response.message){
           alert(response.message)
         } else {
           localStorage.token = response.token
           this.setState(response, () => {
            this.props.history.push("/")
          })
         }

         })
      
     }


  }
  
  handleMembers = () => {
   return <Members user = {this.state.user}/>
  }

  handleRegisterSubmit = (userInfo) =>{
  
    fetch("https://secure-crag-72369.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(response => {
        if (response.message) {
          alert(response.message)
        } else {
          localStorage.token = response.token
          this.setState(response, () => {
            this.props.history.push("/")
          })
        }
     
     })


  }

  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")
    fetch("https://secure-crag-72369.herokuapp.com/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(response => {
      if (response.message) {
        alert(response.message)
      } else {
        localStorage.token = response.token
        this.setState(response, () => {
          this.props.history.push("/")
        })
      }


    })
  }




  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
       return <Login handleLogin = {this.handleLoginSubmit} />

    } else if (routerProps.location.pathname === "/register"){
      return <Register handleRegister = {this.handleRegisterSubmit} />
    }
 }

handleHome = (routerProps) => {
  
  if(routerProps.location.pathname === "/" || routerProps.location.pathname === "/SpakFrontEnd/"){
    return <Home  users={this.state.user} />
  }

}


logout = () => {
  console.log("This was clicked")
    localStorage.clear("token")
    this.setState({
      user: {
        id: 0, 
        username: "",
        position: "",
        initation_year: "",
        image: ""
      },
      token: ""
    })

}

renderPost = (routerProps) => {

  if(routerProps.location.pathname === "/agenda"){
    return <Agenda users={this.state.user} />
  }


}




  render() {
   
    return (
      <div className="contain" style={{height: '100%'}}>
        <Navbar token={this.state.token} user={this.state.user} logout={this.logout}/>
        <Switch> 
        <Route exact path="/" render={this.handleHome}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/history" component={History}/>
        <Route exact path="/members" render={this.handleMembers}/>
        <Route exact path="/login" render={this.renderForm} />
        <Route exact path="/register" render={this.renderForm} />
        <Route exact path="/agenda" render={this.renderPost} />
        <Route  path="/SpakFrontEnd/" render={this.handleHome}/>
     </Switch>
       
      </div>
    )
  }
}

let MagicalComponent = withRouter(App)

export default MagicalComponent
