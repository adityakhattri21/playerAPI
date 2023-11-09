import mongoose from 'mongoose';
import {db} from "./config"

const connectionString = process.env.MONGO_URI || '';//added since not working from env but will find a solution for this
mongoose.connect(connectionString)
.then(()=>{
    console.log('Connected with database');
})
.catch(()=>{
    console.log("Error in connecting with database . Exiting.....");
    console.log(connectionString)
    process.exit(0);
})