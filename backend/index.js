import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .then(() => console.log(`Server running on port ${PORT}`))

  .catch(err => console.error('❌ MongoDB connection error:', err));

// Sample Route
app.get('/', (req, res) => {
  res.send('🚀 Server is running!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🌐 Server listening on port ${PORT}`);
});
