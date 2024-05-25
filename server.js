const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS to allow all origins
app.use(cors());
// End of CORS configuration

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB", err);
});

// Ensure that the auth routes are correctly included and configured
// Add the following code to include auth routes

// Before the existing code
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Add the following lines to include the routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
// End of added lines

// Ensure that the `auth` routes are correctly included and configured.
// Add the following line to include the auth routes
// app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});