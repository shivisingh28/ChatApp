import React from 'react';
import LoginString from "../Login/LoginStrings";
import firebase from "../../services/firebase";
import './Chat.css';
import ReactLoading from 'react-loading';
export default class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            isLoading: true,
            isOpenDialogConfirmLogout:false,
            currentPeerUser:null,
            displayedContactSwitchedNotification:[]
        }
        this.currentUserName = localStorage.getItem(LoginString.Name);
        this.currentUserId =localStorage.getItem(LoginString.ID);
        this.currentUserPhoto =localStorage.getItem(LoginString.PhotoURL);
      //  this.currentUserMessages =localStorage.getItem(LoginString.Messages);

        this.currentUserDocumentId = localStorage.getItem(LoginString.FirebaseDocumentId);
        this.currentUserMessages=[]
        this.searchUsers = []
        this.onProfileClick=this.onProfileClick.bind(this)
        this.getListUser = this.getListUser.bind(this)
    }

    logout=()=>{
        firebase.auth().signOut()
        this.props.history.push('/')
        localStorage.clear()
    }
    onProfileClick=()=>{
        this.props.history.push('/profile')
    }
    componentDidMount(){
        firebase.firestore().collection('users').doc(this.currentUserDocumentId).get()
        .then((doc)=>{
            doc.data().messages.map((item)=>{
                this.currentUserMessages.push({
                    notificationId: item.notificationId,
                    number: item.number
                })

            })
            this.setState({
                displayedContactSwitchedNotification: this.currentUserMessages
            })
        })
        this.getListUser()
    }
    getListUser = async()=>{
        const result= await firebase.firestore().collection('users').get();
        if(result.docs.length>0){
            let listUsers = []
            listUsers = [...result.docs]
            listUsers.forEach((item ,index)=>{
                this.searchUsers.push({
                    key:index,
                    documentKey:item.id,
                    id:item.data().id,
                    name:item.data().name,
                    messages:item.data().messages,
                    URL:item.data().URL,
                    description:item.data().description
                })

            })
            this.setState({
                isLoading:false
            })
        }
        this.renderListUser()
    }
    
    render(){
        return(
            <div className="root">
                <div className="body">
                    <div className="viewListUser">
                        <div className="profileviewleftside">
                            <img
                            className="ProfilePicture"
                            alt=""
                            src={this.currentUserPhoto}
                            onClick={this.onProfileClick}
                            />
                            <button className="Logout" onClick={this.logout}>Logout</button>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}