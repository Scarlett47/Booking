// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="p-8">
			<section className="mb-8">
				<h2 className="text-3xl font-bold mb-4">About Us</h2>
				<p className="text-gray-600">
					Welcome to the hospital booking system. Easily book appointments with
					trusted doctors.
				</p>
			</section>
			<section className="mb-8">
				<h2 className="text-3xl font-bold mb-4">Hospitals</h2>
				<Link to="/hospital-details" className="text-blue-500 underline">
					View Hospitals
				</Link>
			</section>
			<section>
				<h2 className="text-3xl font-bold mb-4">Doctors</h2>
				<p>Explore our experienced doctors and book appointments with ease.</p>
			</section>
		</div>
	);
};

export default Home;
