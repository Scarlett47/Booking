// src/pages/Register.jsx
import React from "react";

const Register = () => {
	return (
		<div className="p-8 max-w-md mx-auto">
			<h1 className="text-3xl font-bold mb-4">Register</h1>
			<form className="space-y-4">
				<input
					type="text"
					placeholder="Name"
					className="w-full p-2 border rounded"
				/>
				<input
					type="email"
					placeholder="Email"
					className="w-full p-2 border rounded"
				/>
				<input
					type="password"
					placeholder="Password"
					className="w-full p-2 border rounded"
				/>
				<button className="w-full bg-green-500 text-white p-2 rounded">
					Register
				</button>
			</form>
		</div>
	);
};

export default Register;
