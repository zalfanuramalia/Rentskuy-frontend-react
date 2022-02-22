import React, { Component } from 'react'
import Login from './pages/Login'
import Home from './pages/Home'

export default class App extends Component {
    state = {
        isLogged: false,
        greetings:''
    }
  render() {
    return (
        <div className=' vh-100 '>
            {!this.state.isLogged && <Login onLogin={(value)=>{this.setState({isLogged: value})}} />}
            {this.state.isLogged && <Home />}
        </div>
    )
  }
}
