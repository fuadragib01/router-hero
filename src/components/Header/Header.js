import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<nav>
				<Link to="/home">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/products">Products</Link>
				<Link to="/friends">Friends</Link>
			</nav>
			<h2>Common Header</h2>
		</div>
	);
};

export default Header;
