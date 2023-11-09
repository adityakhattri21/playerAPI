import {Schema,model} from 'mongoose';

export interface Iplayer{
    name:string,
    country:string,
    score:number
};

const playerSchema = new Schema<Iplayer>({
    name:{
        type:String,
        required:true,
        maxLength:[15,'Player Name cannot be more than 30 characters'],
        unique:true
    },
    country:{
        type:String,
        required:true,
        maxLength:[2,'Country Code cannot be more than 2 letters']
    },
    score:{
        type:Number,
        required:true
    }
});

export default model<Iplayer>('Player',playerSchema);