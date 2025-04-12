// Hello, This is the java script file for the app
// This is the main file for the app
// This file contains the main logic for the app
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');
const likeRoutes = require('./routes/like');
const followRoutes = require('./routes/follow');
const notificationRoutes = require('./routes/notification');
const chatRoutes = require('./routes/chat');
const messageRoutes = require('./routes/message');
const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const { addNotification } = require('./controllers/notificationController');
const { addMessage } = require('./controllers/messageController');
const { addChat } = require('./controllers/chatController');
const { addLike } = require('./controllers/likeController');
const { addComment } = require('./controllers/commentController');