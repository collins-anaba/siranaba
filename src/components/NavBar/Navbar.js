import React,  {Component} from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            menuStatus: 'closed'
        }
    }
        handleClick = ()=>{
            if(this.state.menuStatus === 'open'){
                this.setState({
                    menuStatus: 'closed'
                })
            } else {
                this.setState ({
                    menuStatus: 'open'
                })
            }
        }
    render(){
        return (
            <div className='bar'>
                <nav>
                
                {/* <div className='mobile-container' onclick={()=> this.handleClick()}>
                  <img className='Hamburger-Image' 
                 src="https://cdn2.iconfinder.com/data/icons/mobile-banking-ver-3a/100/1-48-512.png"
                 alt='menu-button'/>  
                 </div> */}

                <div>
                 <ul>
                <Link to='/Home'>Home</Link>
                <Link to='/Reviews'>Reviews</Link>
                <Link to='News'>News</Link>
                <Link to='Contact'>Contact</Link>
                <Link>Sign In</Link>
                 </ul>
                 {this.state.menuStatus === 'open'?
                 <div>
                <ul>
                <Link to='/Home'>Home</Link>
                <Link to='/Reviews'>Reviews</Link>
                <Link to='News'>News</Link>
                <Link to='Contact'>Contact</Link>
                <Link>Sign In</Link>
                 </ul>
                 </div> : null
                }
                </div>

                </nav>
            </div>
        )
    }
}