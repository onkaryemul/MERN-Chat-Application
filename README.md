A real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Connect with friends, join rooms, and engage in conversations.


# MERN Chat Application

MERN Chat Application is a real-time communication platform leveraging the MongoDB, Express.js, React.js, and Node.js (MERN) stack. Seamlessly connecting users through public and private chat rooms, it offers features like user authentication, profile customization, and responsive design for an engaging chatting experience.


## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)


## Overview

This MERN stack chat application provides users with a dynamic platform to create accounts, log in, and engage in conversations across diverse chat rooms, including tech, general, finance, and crypto. Users can seamlessly send and receive messages within chat rooms and initiate direct messages to specific individuals.


## Features

- **User authentication and authorization**
- **Public and private chat rooms**
- **Real-time updates using Socket.IO**
- **User profile pictures and status indicators**
- **Responsive design for seamless usage on various devices**

### User Authentication and Profile Creation

- **Access Control:** Visitors can view chat rooms, but account creation or login is required to access chat functionality.
- **Profile Customization:** Account creation involves providing a username, email, and password and uploading a profile picture.
- **Room Access:** Upon account creation, users gain access to chat rooms, including tech, general, finance, and crypto.

### Messaging Functionality

- **Real-Time Communication:** Users can send and receive messages in chat rooms, fostering real-time communication.
- **Notification System:** Instant notifications are sent to users upon receiving new messages.
- **Direct Messaging:** Users can send direct messages to specific individuals, triggering notifications for the recipient.


## Technologies Used

- **MERN Stack:** Utilizes MongoDB for the database, Express for the backend, React for the frontend, and Node.js for server-side JavaScript.
- **State Management:** Employs Redux and Redux Toolkit for efficient state management, handling user information and notifications seamlessly.
- **Image Uploads:** Utilizes Cloudinary for streamlined image uploads, enhancing profile picture customization.

- **Frontend:**
  - React.js
  - React Bootstrap
  - Socket.IO Client

- **Backend:**
  - Node.js
  - Express.js
  - Socket.IO
  - MongoDB (MongoDB Atlas)

- **State Management:**
  - Redux Toolkit

- **Styling:**
  - CSS, SCSS


## Installation

1. **Clone the repository:**

   ```bash
     git clone https://github.com/onkaryemul/MERN-Chat-Application.git
   ```

2. **Navigate to the project directory:**

   ```bash
     cd MERN-Chat-Application
   ```
   
3. **Install dependencies:**
   Open terminals for both `mern-chat-frontend` and `mern-chat-backend` and Install dependencies for both in respective terminals by using the following command:

   ```bash
     # Navigate to mern-chat-frontend folder and install dependencies
     cd mern-chat-frontend && npm install
     # Navigate to mern-chat-backend folder and install dependencies
     cd mern-chat-backend && npm install
   ```

   
## Usage

### Backend Configuration

1. **Configure environment variables for the backend:**
   Create a .env file in the `mern-chat-backend` folder and set the following variables:

   ```env
      ATLAS_URI=your-mongodb-atlas-uri
      FRONTEND_URI=http://localhost:3000
      PORT=5001
   ```
   
    Replace `your-mongodb-atlas-uri` with your actual mongodb atlas connection url.
    The FRONTEND_URI is the URL where your frontend will be hosted, and PORT is the port where the backend server will run.
    Make sure to replace placeholders like `yourusername` and `yourpassword` in the MongoDB URI with your actual MongoDB credentials.


### Frontend Configuration

2. **Configure environment variables for the frontend:**
   Create a .env file in the mern-chat-frontend folder and set the following variables:

   ```env
      REACT_APP_UPLOAD_PRESET=your-cloudinary-upload-preset
      REACT_APP_CLOUDINARY_URL=your-cloudinary-uri
      REACT_APP_SOCKET_URL=http://localhost:5001
      REACT_APP_BACKEND_URL=http://localhost:5001
   ```

    Replace `your-cloudinary-upload-preset` and `your-cloudinary-uri` with your actual Cloudinary credentials.

    The REACT_APP_UPLOAD_PRESET and REACT_APP_CLOUDINARY_URL are related to Cloudinary for image uploads.
    REACT_APP_SOCKET_URL is the URL of your Socket.IO server, and REACT_APP_BACKEND_URL is the URL of your backend API.


3. **Start the development server:**
   Again, open terminals for both `mern-chat-frontend` and `mern-chat-backend` and run the following command in the respective terminal
   
   ```bash
     # In mern-chat-frontend folder
     npm start
     # In mern-chat-backend folder
     npm start
   ```

4. **Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the application.**

5. **Register or log in to your account, explore available chat rooms, join public rooms or invite friends to private rooms and engage in real-time conversations with other users.**


## Contributing

Contributions are welcome! Feel free to fork the repository, make improvements, and submit a pull request. Please follow best practices and maintain code clarity.

If you would like to contribute to the project, follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```bash
     git checkout -b feature/your-feature-name
   ```
   
3. Make your changes and commit:

   ```bash
     git commit -m "Add your feature"
   ```

4. Push to your branch:

   ```bash
     git push origin feature/your-feature-name
   ```
   
5. Create a pull request on GitHub.

