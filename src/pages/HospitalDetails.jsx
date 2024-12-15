// src/pages/HospitalDetails.jsx
import React from "react";
import { Link } from "react-router-dom";

const HospitalDetails = () => {
	const doctors = [
		{ name: "Dr. John Doe", category: "Cardiologist" },
		{ name: "Dr. Jane Smith", category: "Surgeon" },
	];

	return (
		<div className="p-8">
			<h1 className="text-3xl font-bold mb-4">Hospital Details</h1>
			<ul>
				{doctors.map((doctor, index) => (
					<li key={index} className="mb-2">
						<Link
							to={`/doctor-booking/${doctor.name}`}
							className="text-blue-500 underline"
						>
							{doctor.name} - {doctor.category}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default HospitalDetails;
