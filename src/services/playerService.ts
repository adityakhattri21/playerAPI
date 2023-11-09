import Player from "../database/models/playerModel";
import { ErrorHandler } from "../utils/errorHandler";

export const savePlayerData=async (
name:string,
country:string,
score:string
)=>{
    const player = await Player.create({
        name,
        country,
        score
    });
    if(player)
    return player; 
}

export const getAllPlayers = async ()=>{
    const players = await Player.find().sort({score:-1});
    return players;
}

export const getPlayerByRank = async (
    rank:number,
    next:any
)=>{
    const noOfPlayers = await Player.countDocuments();
    if(rank > noOfPlayers)
    return next(new ErrorHandler("We don't have any player at this rank or below",404));
    const players = await Player.find().sort({score:-1});
    const reqData = players[rank-1];
    return reqData;

}

export const updatePlayerById = async (
    name:string='',
    score:number|null = null,
    playerId:string
)=>{
    if(name !== '' && score !==null){
        const newData = {
            name,
            score
        }
        await Player.findByIdAndUpdate(playerId, newData);
    }
    else if(name !==''){
        const newData = {
            name
        };
        await Player.findByIdAndUpdate(playerId, newData);
    }
    else{
        const newData={
            score
        };
        await Player.findByIdAndUpdate(playerId, newData);
    }
    return 'Updated Successfully';
}

export const deletePlayerById =async (
    playerId:string
)=>{
    const data = await Player.findByIdAndDelete(playerId);
    return data;
}

export const randomPlayerData = async ()=>{
    const noOfPlayers = await Player.countDocuments();
    const random = Math.floor(Math.random()*noOfPlayers);
    const data = await Player.find().skip(random).limit(1);
    return data[0];
}