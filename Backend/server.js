import express from 'express';
import { connectDB } from './config/db.js';
import { User } from './model/user.js';
import { form } from './model/form.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

connectDB()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

//custom
const methodFind=(req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
};
app.use(methodFind);

const blockDelete=(req,res,next)=>{
    if(req.method==="DELETE"){
        return res.send('Delete function blocked')
    }
    next()
}
app.use(blockDelete)

app.get('/get', async (req, res) => {
  const users = await User.find(); 
  res.json(users);
});

app.post('/post',async(req,res)=>{
  try{
    const { name, age, isStudent } = req.body;
    const newUser = new User({
      name,
      age,
      isStudent: isStudent === 'true' || isStudent === true
    });
    await newUser.save();
    res.status(201).json(newUser);
  }catch (error){
    res.status(401).json(error)
  }
})

app.get('/get/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.delete('/delete/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted', user: deletedUser });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get('/getform', async (req, res) => {
  try {
    const formData = await form.find();
    res.json(formData);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post('/postform', async (req, res) => {
  try {
    console.log('Received data:', req.body);
    const newform = new form(req.body);
    await newform.save();
    res.status(201).json({ msg: 'form created' });
  } catch (error) {
    res.status(401).json(error);
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
