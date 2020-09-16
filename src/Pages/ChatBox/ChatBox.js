import React from 'react';
import {Card} from 'react-bootstrap';
import ReactLoading from 'react-loading';
import 'react-toastify/dist/ReactToastify.css';
import firebase from '../../services/firebase';
import Images from  '../../ProjectImages/ProjectImages';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import moment from 'react-moment';
import './ChatBox.css';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import LoginString from '../Login/LoginStrings';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ChatBox extends React.Component{
    constructor(props){
    super(props);
      this.state = {
     isLoading:false,
     isShowSticker :false,
     inputValue:""
      }
      this.currentUserName = localStorage.getItem(LoginString.Name);
	  this.currentUserId = localStorage.getItem(LoginString.ID);
	  this.currentUserPhoto = localStorage.getItem(LoginString.PhotoURL);
	  this.currentUserDocumentId = localStorage.getItem(
			LoginString.FirebaseDocumentId
        );
      this.stateChanged = localStorage.getItem(LoginString.UPLOAD_CHANGED);
      this.currentPeerUser = this.props.currentPeerUser
      }
    componentWillReceieveProps(newProps){
        if(newProps.currentPeerUser){
            this.currentPeerUser = newProps.currentPeerUser
            //this.getListHistory()
        }
    }
    componentDidMount(){
       // this.getListHistory()
    }
    render(){
        return(
           <Card className="viewChatBoard">
               <div className="headerChatBoard">
               <img
               className="viewAvatarItem"
               src={this.currentPeerUser.URL}
               alt=""
               />
               <span className="textHeaderChatBoard">
                   <p style={{fontSize:'20px'}}>{this.currentPeerUser.name}</p>
               </span>
               <div className="aboutme">
               <span className="textHeaderChatBoard">
                   <p>{this.currentPeerUser.description}</p>
               </span>  
               </div>
               </div>
        <div className="viewListContentChat">
            
            <div
            style={{float:'left',clear:'both'}}
            ref={el=>{
              this.messagesEnd = el
            }}
            />

        </div>
        {this.state.isShowSticker ? this.renderSticker(): null}
        <div className="viewBottom">
            <InsertPhotoIcon className="isOpenGallery" onClick={()=>{this.refInput.click()}}/>
            <img
            className="viewInputGallery"
            accept="images/*"
            type="file"
            onChange={this.onChoosePhoto}
             />
            <InsertEmoticonIcon className="isOpenSticker" onClick={this.openListSticker}/>
            <input
            className="viewInput"
            placeholder="type a message"
            value={this.state.inputValue}
            onChange={event =>{
                this.setState({inputValue:event.target.value})
            }}
            onKeyPress = {this.onKeyPress}
            />
            <SendIcon className="icSend" onClick={()=>{this.onSendMessage(this.state.inputValue,0)}}/>
        </div>
           </Card>
        )
    }
    renderSticker = ()=>{
        return(
            <div className="viewStickers">
               <img
               className="imgSticker"
               src={Images.lego}
               alt="sticker"
               onClick ={()=>{this.onSendMessage('lego',2)}}
               />
                <img
               className="imgSticker"
               src={Images.lego1}
               alt="sticker"
               onClick ={()=>{this.onSendMessage('lego1',2)}}
               />
                <img
               className="imgSticker"
               src={Images.lego2}
               alt="sticker"
               onClick ={()=>{this.onSendMessage('lego2',2)}}
               />
                <img
               className="imgSticker"
               src={Images.lego4}
               alt="sticker"
               onClick ={()=>{this.onSendMessage('lego4',2)}}
               />
                <img
               className="imgSticker"
               src={Images.lego5}
               alt="sticker"
               onClick ={()=>{this.onSendMessage('lego5',2)}}
               />
                <img
               className="imgSticker"
               src={Images.lego6}
               alt="sticker"
               onClick ={()=>{this.onSendMessage('lego6',2)}}
               />
                <img
               className="imgSticker"
               src={Images.lego7}
               alt="sticker"
               onClick ={()=>{this.onSendMessage('lego7',2)}}
               />
                <img
               className="imgSticker"
               src={Images.lego8}
               alt="sticker"
               onClick ={()=>{this.onSendMessage('lego8',2)}}
               />
                <img
               className="imgSticker"
               src={Images.lego9}
               alt="sticker"
               onClick ={()=>{this.onSendMessage('lego9',2)}}
               />
                <img
               className="imgSticker"
               src={Images.mim1}
               alt="sticker"
               onClick ={()=>{this.onSendMessage('mim1',2)}}
               />
                <img
               className="imgSticker"
               src={Images.mim2}
               alt="sticker"
               onClick ={()=>{this.onSendMessage('mim2',2)}}
               />
                <img
               className="imgSticker"
               src={Images.mim3}
               alt="sticker"
               onClick ={()=>{this.onSendMessage('mim3',2)}}
               />
                <img
               className="imgSticker"
               src={Images.mim4}
               alt="sticker"
               onClick ={()=>{this.onSendMessage('mim4',2)}}
               />

            </div>
        )
    }
}