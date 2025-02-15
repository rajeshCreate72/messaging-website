# ✉️ Messaging Website

A real-time messaging platform built with **React**, **Redux**, and a **Node.js** backend. This project allows users to send and receive messages with a responsive and user-friendly interface.

---

## 📁 Project Structure

The project is divided into the following directories:

- **client**: Contains the frontend code developed with React and Redux.
- **server**: Contains the backend API developed with Node.js and Express.

---

## ✨ Features

- **User Authentication**:
  - Secure user login and registration using JWT.
- **Real-Time Messaging**:
  - Chat functionality with real-time updates.
- **Responsive Design**:
  - Optimized for mobile and desktop views.
- **Redux for State Management**:
  - Centralized state management for better scalability and maintainability.
- **Backend API**:
  - Handles user authentication, message storage, and retrieval.

---

## 🛠 Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **MongoDB**: [Download and install MongoDB](https://www.mongodb.com/try/download/community)

---

## 🚀 Installation

1. **Clone the Repository and Navigate to the Project Directory**:

    ```bash
    git clone https://github.com/rajeshCreate72/messaging-website.git
    cd messaging-website
    ```

2. **Install Dependencies**:

    ```bash
    # Install backend dependencies
    cd server
    npm install

    # Install frontend dependencies
    cd ../client
    npm install
    ```

3. **Set Up Environment Variables**:

    Create a `.env` file in the `server` directory with the following content:

    ```env
    PORT=8080
    DB_URI=<Your MongoDB connection string URI>
    ```

4. **Run the Application**:

    ```bash
    # Start the backend server
    cd ../server
    npm start

    # Open a new terminal and start the frontend application
    cd ../client
    npm start
    ```

5. **Access the Application**:

    - Open your browser and navigate to `http://localhost:3000` to use the app.

---

## 📂 Server Directory Details

The `/server` directory contains the backend code and API logic. It includes:

- **Dependencies**:
  - `express`: Web framework for handling API routes.
  - `mongoose`: ODM for MongoDB.
  - `jsonwebtoken`: For secure authentication.
- **Endpoints**:
  - `/api/auth`: Handles user authentication.
  - `/api/messages`: Handles message creation and retrieval.

To set up and run the backend server:

```bash- **Endpoints**:
  - `POST /api/login`: User login endpoint for authentication.
  - `POST /api/register`: User registration endpoint to create a new account.
  - `GET /api/contacts`: Endpoint to retrieve user contacts.
  - `GET /api/chats`: Endpoint to retrieve chats for a user.
  - `GET /api/users`: Endpoint to fetch user details.
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Run the server
npm start
```

## 🌐 Live Demo

A live version of the application is available at:

(https://chat-website-virid.vercel.app/login)
