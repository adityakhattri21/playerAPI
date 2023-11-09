import {Request,Response,NextFunction} from 'express'
import { deletePlayerById, getAllPlayers, getPlayerByRank, randomPlayerData, savePlayerData, updatePlayerById } from '../services/playerService'
import { ErrorHandler } from '../utils/errorHandler';
import asyncError from '../middleware/catchAsyncError';


export const getPlayersController = asyncError(async (req:Request,res:Response,next:NextFunction)=>{
    const sort = req.query.sort as string || "desc";
  const data = await getAllPlayers(sort);
   res.status(200).json(data);
});

export const addPlayerController = asyncError(async (req:Request , res:Response , next:NextFunction)=>{
    const {name,score,country} = req.body;
    if(!name || !score || !country)
    return next (new ErrorHandler("Please add Full Details",400));
    const data = await savePlayerData(name,country,score);
     res.status(200).json(data);
})

export const updatePlayerController = asyncError( async (req:Request , res:Response , next:NextFunction)=>{
    const { name ='', score=null} = req.body;
    const {id} = req.params;
    if(!name && !score)
    return next(new ErrorHandler("Please add name or score only to update",400));
    const data = await updatePlayerById(name,score,id);
    res.status(200).json(data);
})

export const deletePlayerController= asyncError (async(req:Request , res:Response , next:NextFunction)=>{
    const {id} = req.params;

    const data = await deletePlayerById(id);

    res.status(200).json(data);
})

export const getPlayesrByRankController = asyncError (async (req:Request , res:Response , next:NextFunction)=>{
    const {rank} = req.params;
    const rank_number = Number.parseInt(rank);
    const data = await getPlayerByRank(rank_number,next);
    res.status(200).json(data);
})

export const getRandomPlaayerController =asyncError (async (req:Request , res:Response , next:NextFunction) => {
    
    const data = await randomPlayerData();
    res.status(200).json(data);
})