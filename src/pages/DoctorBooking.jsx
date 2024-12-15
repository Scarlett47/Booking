import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css"; // Custom CSS for styling

const DoctorBooking = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState(null);

	const timeSlots = [
		"9:00 AM",
		"10:30 AM",
		"11:00 AM",
		"11:30 AM",
		"12:00 PM",
		"1:30 PM",
		"3:00 PM",
	];

	const handleDateChange = (date) => {
		setSelectedDate(date);
		setSelectedTime(null); // Reset time when date changes
	};

	const handleTimeSelection = (time) => {
		setSelectedTime(time);
	};

	// Format date to show only month and day
	const formattedDate = selectedDate
		? selectedDate.toLocaleDateString("en-US", {
				month: "long",
				day: "numeric",
		  })
		: "Please select a date";

	return (
		<div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
			{/* Title */}
			<h1 className="text-3xl font-bold text-center mb-8">
				Book Your Appointment
			</h1>

			{/* Calendar and Time Slots */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Calendar */}
				<div className="calendar-container">
					<Calendar
						onChange={handleDateChange}
						value={selectedDate}
						minDate={new Date()} // Disable past dates
						className="custom-calendar"
					/>
				</div>

				{/* Time Slots */}
				<div className="time-slot-container">
					<h2 className="text-xl font-semibold mb-4">
						{selectedDate
							? `Selected Date: ${formattedDate}`
							: "Please select a date"}
					</h2>
					<div className="grid grid-cols-2 gap-4">
						{timeSlots.map((slot, index) => (
							<button
								key={index}
								className={`p-3 rounded-md text-center font-medium ${
									selectedTime === slot
										? "bg-blue-600 text-white"
										: "bg-gray-200 hover:bg-blue-100"
								}`}
								onClick={() => handleTimeSelection(slot)}
							>
								{slot}
							</button>
						))}
					</div>

					{/* Selected Time */}
					{selectedTime && (
						<p className="mt-6 text-lg text-blue-600">
							Selected Time: {selectedTime}
						</p>
					)}
				</div>
			</div>

			{/* Confirm Button */}
			<div className="mt-8 text-center">
				<button
					className="bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600 disabled:bg-gray-300"
					disabled={!selectedDate || !selectedTime} // Disable if no selection
				>
					Confirm Booking
				</button>
			</div>
		</div>
	);
};

export default DoctorBooking;
