import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    
    const mongoURI = 'mongodb+srv://manikandans22msc:1234567890@cluster0.amrtggi.mongodb.net/sample_mflix';
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
  }
};