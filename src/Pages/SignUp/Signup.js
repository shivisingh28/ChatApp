import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "./Signup.css";
import {Card} from 'react-bootstrap';
import firebase from '../../services/firebase';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default class Signup extends Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:"",
            name:"",
            error:null
        }
    }
    render(){
        const Signinsee ={
            display:'flex',
            flexDirection:'column',
            alignitems:'center',
            color:'White',
            backgroudColor:'#1ebea5',
            width:'100%',
            boxShadow:"0 5px 5px #808888",
            height:"10rem",
            opacity:"0.5",
            borderBottom:"5px solid green",
        }
        return(
            <div>
                <CssBaseline/>
                <Card style={Signinsee}>
                    <div>
                        <Typography component="h1" variant="h5">
                            Sign Up 
                            To
                        </Typography>
                        <div>
                        </div>
                            <Link to="/">
                                <button class="btn"><i class="fa fa-home"></i>WebChat</button>
                            </Link>
                      
                    </div>

                </Card>
                <Card className="formacontrooutside">
                    <form className="customform" noValidate onSubmit={this.handleSubmit}>
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address-example:abc@gmail.com"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={this.handlechange}
                        value={this.state.email}
                        />
                        <div>
                            <p style={{color:'grey',fontSize:'15px',marginLeft:'0'}}>
                                Password: length greater than 6 (alphabet,number,special character)
                            </p>
                        </div>
                    </form>

                </Card>
            </div>
        )
    }

}