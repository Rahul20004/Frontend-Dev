// q5_movieBooking.js
"use strict";

const bookingInput = {
    name: "Rahul Kumar",
    email: "rahul@example.com",
    seats: 4
};

function validateName(name) {
    return /^[A-Za-z ]+$/.test(name);
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(email);
}

function validateSeats(seats) {
    return seats >= 1 && seats <= 10;
}

function bookTicket(data) {
    let errors = {};

    if (!validateName(data.name)) {
        errors.name = "Name must contain only alphabets";
    }

    if (!validateEmail(data.email)) {
        errors.email = "Invalid email format";
    }

    if (!validateSeats(data.seats)) {
        errors.seats = "Seats must be between 1–10";
    }

    if (Object.keys(errors).length > 0) {
        return { success: false, errors };
    }

    const ticket = {
        name: data.name,
        email: data.email,
        seats: data.seats
    };

    return { success: true, ticket };
}

const response = bookTicket(bookingInput);

if (response.success) {
    console.log("Ticket Booked Successfully:", response.ticket);
} else {
    console.log("Booking Failed:", response.errors);
}
