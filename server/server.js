// 1 import dependencies
import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import mongoose, { connect } from "mongoose";
import dotenv from 'dotenv';
import authRoute from "./Routes/auth.js";

const app = express();

const corsOptions = {
    origin:true
}

app.get('/', (_req,res)=>{
    res.send('Api is working')
})


dotenv.config()
const port = process.env.PORT;

// middleware
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/auth', authRoute) //domian/api/v1/auth/register

// 4 Listen to Port
app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port: ${port}`);
});

// database connection
mongoose.set('strictQuery', false)
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })

        console.log('MongoDB database is connected')

    }catch(err){
        console.log('MongoDB database connection is failed')
    }
}