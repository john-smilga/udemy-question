import React, { Component } from 'react';
import logo from '../images/logo2.png';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
	state = {
		isOpen:false
	}

	handleToggle = () =>{
		this.setState({isOpen:!this.state.isOpen})
	}
	render() {
		return (
			<nav className="navbar">
				<div className="nav-center">
					<div className="nav-header">
						<Link to="/">
							<img className="logo" src={logo} alt='beach resort'/>
						</Link>
						<button 
						type="button" 
						className="nav-btn"
						onClick={this.handleToggle}
						>
							<FaAlignRight className="nav-icon"/>
						</button>
					</div>
					<ul className={this.state.isOpen?
					"nav-links show-nav" 
					:"nav-links"}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/ourprojects">Our Projects</Link>
						</li>
						<li>
							<Link to="/riviera">Orangerie Riviera</Link>
						</li>
						<li>
							<Link to="/contactus">Contact Us</Link>
						</li>
					</ul>

				</div>
			</nav>
		)
	}
}
