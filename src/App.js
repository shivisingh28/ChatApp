import React,{Component} from 'react';
import{
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
//Pages
import Home from './Pages/Home/Home';
import Chat from './Pages/Chat/Chat';
import ChatBox from './Pages/ChatBox/ChatBox';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Signup from './Pages/SignUp/Signup';
import Welcome from './Pages/Welcome/Welcome';
import firebase from './services/firebase';
import {toast,ToastContainer} from 'react-toastify';

class App extends Component{
  showToast = (type,message) =>{
    switch(type){
      case 0:
        toast.warning(message)
        break;
        case 1:
          toast.success(message)
        default:
          break;
    }
  }
      constructor(){
        super();
        this.state={
          authenticated:false,
          loading:true
        };
      }
      //componentDidMount is used to fetch any api from any data

    componentDidMount(){
      firebase.auth().onAuthStateChanged(user =>{
        if(user){
          this.setState({
            authenticated:true,
            loading:false
          });
        }else{
          this.setState({
            authenticated:false,
            loading:false
          });
        }
      })

    }
    render(){
      return(

      )
    }
}
export default App;