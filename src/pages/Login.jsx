// src/pages/Login.jsx
import React from "react";

const Login = () => {
	return (
		<div className="p-8 max-w-md mx-auto">
			<h1 className="text-3xl font-bold mb-4">Login</h1>
			<form className="space-y-4">
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
				<button className="w-full bg-blue-500 text-white p-2 rounded">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
