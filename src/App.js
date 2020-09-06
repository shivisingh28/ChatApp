import React,{Component} from 'react';
import{
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import './App.css';
//Pages
import Home from './Pages/Home/Home';
import Chat from './Pages/Chat/Chat';
//import ChatBox from './Pages/ChatBox/ChatBox';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Signup from './Pages/SignUp/Signup';
//import Welcome from './Pages/Welcome/Welcome';
//import firebase from './services/firebase';
import {toast,ToastContainer} from 'react-toastify';

class App extends Component{
  showToast = (type,message) =>{
    switch(type){
      case 0:
        toast.warning(message)
        break;
        case 1:
          toast.success(message)
          break;
        default:
          break;
    }
  }
     
      //componentDidMount is used to fetch any api from any data

   
    render(){
      return (
        <Router>
          <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          position ={toast.POSITION.BOTTOM_CENTER}
          />
          <Switch>
            <Route
            exact
            path="/"
            render={props =><Home{...props}/>}
            />

            <Route
            path="/login"
            render={props =><Login showToast={this.showToast}{...props}/>}
            />
            <Route
            path="/profile"
            render={props =><Profile showToast={this.showToast}{...props}/>}
            />
            <Route
            path="/signup"
            render={props =><Signup showToast={this.showToast}{...props}/>}
            />
            <Route
            path="/chat"
            render={props =><Chat showToast={this.showToast}{...props}/>}
            />


          </Switch>
        </Router>
      );
    }
}
export default App;