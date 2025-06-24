import mongoose from 'mongoose'; 

const userSchema = new mongoose.Schema({
  name: {type:String,required:true},
  age: {type:Number,required:true},
  isStudent: {type:Boolean,required:true},
});

export const User = mongoose.model('users', userSchema);