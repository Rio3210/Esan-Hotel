# Hotel Booking API

This is a RESTful API for managing hotel bookings, rooms, and users (including admins) using Node.js and Express.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

git clone https://github.com/Rio3210/hotel-booking-api.git


2. Navigate to the project directory:

cd rest_full_api

3. Install dependencies:

npm install

4. Start the server:

npm start

## API Endpoints

The following endpoints are available:

### Authentication

- `POST /auth/register` - Register a new user.
- `POST /auth/login` - Log in an existing user.

### Hotels

- `GET /hotels` - Get a list of all hotels.
- `GET /hotels/:id` - Get details of a specific hotel.
- `POST /hotels` - Create a new hotel (admins only).
- `PUT /hotels/:id` - Update a specific hotel (admins only).
- `DELETE /hotels/:id` - Delete a specific hotel (admins only).

### Rooms

- `GET /rooms` - Get a list of all rooms.
- `GET /rooms/:id` - Get details of a specific room.
- `POST /rooms` - Create a new room (admins only).
- `PUT /rooms/:id` - Update a specific room (admins only).
- `DELETE /rooms/:id` - Delete a specific room (admins only).

### Users

- `GET /users` - Get a list of all users (admins only).
- `GET /users/:id` - Get details of a specific user (admins only).
- `PUT /users/:id` - Update a specific user (admins only).
- `DELETE /users/:id` - Delete a specific user (admins only).

## Future Features

- Add booking functionality for users.
- Allow users to leave reviews and ratings for hotels and rooms.
- Add search functionality for hotels and rooms.
- Allow admins to manage bookings.
- Implement payment gateway for bookings.

## Contributing

Contributions are welcome! Please see the CONTRIBUTING.md file for guidelines.


