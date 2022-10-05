import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<nav>
				<NavLink
					className={({ isActive }) => (isActive ? "active" : "")}
					to="/home"
				>
					Home
				</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/products">Products</NavLink>
				<NavLink to="/posts">Posts</NavLink>
				<NavLink to="/friends">Friends</NavLink>
			</nav>
			<h2>Common Header</h2>
		</div>
	);
};

export default Header;
