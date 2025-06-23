import express from 'express';
import mongoose from 'mongoose'; 
import connectDB from './config/db.js';

const app = express();
app.use(express.json());

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  isStudent: { type: Boolean, required: true } 
});

const User = mongoose.model('users', userSchema);

app.get('/get', async (req, res) => {
  const users = await User.find(); 
  res.json(users);
});

app.post('/post', (req, res) => {
  res.send('from post');
});

app.put('/put', (req, res) => {
  res.send('from put');
});

app.patch('/patch', (req, res) => {
  res.send('from patch');
});

connectDB().then(() => {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
});
