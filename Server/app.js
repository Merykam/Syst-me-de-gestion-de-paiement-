const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/authRoutes');
const cors = require('cors');

app.use(cookieParser());



try {
    app.use(express.json());
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }


const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE)
.then(()=>console.log("database connected"))
.catch(()=>console.log('not connected'))


app.listen(port,()=>{
    console.log(`app is listning to ${port}`);
})

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))


app.use('/api/auth',userRoute);