import React ,{Component} from 'react';
import './Footer.css';
 
class Footer extends Component{
    Copyright=()=>{
        <h2 variant="body" color="textSecondary" align="center">
            {'Copyright &#169'}
            {'Shivangi Singh'}
            {new Date().getFullYear()}
            {'.'}
        </h2>
    }
    render(){
        return(
            <Footer>
                <div class="footer 1-box is-center">
                    {this.Copyright()}
                </div>
            </Footer>
        )
    }

}
export default Footer;