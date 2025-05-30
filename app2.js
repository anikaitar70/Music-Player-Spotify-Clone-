const express = require ('express')
const path = require('path')
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app =  express()
const dburi = 'mongodb://localhost:27017/users';

mongoose.connect(dburi, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

const userSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  language: String
});

const User = mongoose.model('User', userSchema);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.listen(3000,()=>{
    console.log("server is listening")
})
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.post('/submit-form', (req, res) => {
  const { name, address, phone, language } = req.body;
  res.cookie('name', name); 
  res.cookie('address', address);
  res.cookie('phone', phone);
  res.cookie('language', language);
  console.log(name)
  app.get('/submit-form', (reqq, ress) => {
    ress.send(`
      <h1>User Profile</h1>
      <p>Name: ${name}</p>
      <p>Address: ${address}</p>
      <p>Phone: ${phone}</p>
      <p>Language: ${language}</p>
    `);

app.get('/register', async (req, res) => {
  try {
    const newUser = new User({ name, address, phone, language });
    await newUser.save();
    res.send('User registered successfully!');
  } catch (error) {
    res.status(500).send('Error registering user');
  }
});
  });
  console.log('Form submitted successfully!');
});




