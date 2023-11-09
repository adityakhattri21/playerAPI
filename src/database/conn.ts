import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://adityakhattri112233:aditya112233@cluster0.kpr4bi4.mongodb.net/?retryWrites=true&w=majority';//added since not working from env but will find a solution for this

mongoose.connect(connectionString)
.then(()=>{
    console.log('Connected with database');
})
.catch(()=>{
    console.log("Error in connecting with database . Exiting.....");
    process.exit(0);
})