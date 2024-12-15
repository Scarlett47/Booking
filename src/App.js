// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HospitalDetails from "./pages/HospitalDetails";
import DoctorBooking from "./pages/DoctorBooking";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	return (
		<Router>
			<div className="flex flex-col min-h-screen">
				<Navbar />
				<main className="flex-grow">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/hospital-details" element={<HospitalDetails />} />
						<Route
							path="/doctor-booking/:doctorName"
							element={<DoctorBooking />}
						/>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
