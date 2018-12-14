import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import './Nav.css';

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: "0%"
        }
    }

    openNav = (e) => {
        this.setState({
            width: "30%"
        })
    }

    closeNav = (e) => {
        this.setState({
            width: "0%"
        })
    }

    render() {
        return (
          
          <div>
                <div id="myNav" class="overlay" style={{ width: this.state.width }}>

                    <p className="closebtn" onClick={this.closeNav}> &times; </p>

                    <div className="overlay-content">
                    <NavLink exact to="/" onClick={this.closeNav}>Home</NavLink>
                    <NavLink to="/about" onClick={this.closeNav}>About</NavLink>
                    </div>
                </div>

                <span className="spanstyle" onClick={this.openNav}>&#9776;</span>
             </div>  
        )
    }
}
export default Nav;