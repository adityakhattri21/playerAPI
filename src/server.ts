import express,{Application,Request,Response} from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import playerRoute from './routes/playerRoute';
import './database/conn';
import errorFunction from "./middleware/error";

const app:Application = express();
const port = process.env.PORT || 3000; 
app.use(express.json());

app.use('/',playerRoute);
app.get("/",(req:Request,res:Response)=>{ 
    res.status(200).json({message:"Working"});
})

app.use(errorFunction);
app.listen(port,()=>{
    console.log(`Server is up at ${port}`);
})