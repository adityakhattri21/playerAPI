import {Request,Response,NextFunction} from 'express';
import { ErrorHandler } from '../utils/errorHandler';

const errorFunction = (err:any,req:Request,res:Response,next:NextFunction)=>{

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";


    //Handling Cast Error
    if(err.name === "CastError"){
        const message = `Resource Not Found. Invalid: ${err.path}`
        err = new ErrorHandler(message,400);
    }

    //Mongoose Duplicate key error
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`
        err = new ErrorHandler(message,400);
    }

    
    res.status(err.statusCode).json({
        message:err.message,
        status:err.statusCode,
    });
}

export default errorFunction;