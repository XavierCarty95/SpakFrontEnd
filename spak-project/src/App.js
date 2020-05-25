import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import History from './components/History'
import Contact from './components/Contact'
import Members from './components/Members'


export class App extends Component {
  
  state = {
     members: []
  }
  componentDidMount(){

     fetch("http://localhost:4000/users")
     .then(r => r.json())
     .then(listOfMembers => {
        this.setState({
          members : listOfMembers
        })


     })

  }


  handleMembers = () => {
   return <Members members = {this.state.members}/>
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Switch> 
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/history" component={History}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/members" render={this.handleMembers}/>
     </Switch>
      </div>
    )
  }
}

export default App
