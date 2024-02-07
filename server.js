require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);
const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', () => console.log+('connected'));

//routes

app.listen(PORT, () => console.log('listening on port', PORT));
