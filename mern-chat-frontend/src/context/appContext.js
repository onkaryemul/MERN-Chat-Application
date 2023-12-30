import React from 'react';
import { io } from 'socket.io-client';


const SOCKET_URL = "http://localhost:5001"; // backend 


// socket
export const socket = io(SOCKET_URL);


// app context
export const AppContext = React.createContext();

