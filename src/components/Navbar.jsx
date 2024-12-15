// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
			<h1 className="text-2xl font-bold">Hospital Booking</h1>
			<div className="flex gap-4">
				<Link to="/" className="hover:underline">
					Home
				</Link>
				<Link to="/login" className="hover:underline">
					Login
				</Link>
				<Link to="/register" className="hover:underline">
					Register
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
