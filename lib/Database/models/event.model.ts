import { Document,Schema, model, models } from "mongoose";

export interface IEvent extends Document {
    _id:string;
    title: string;
    description?: string;
    location?: string;
    createdAt?: Date;
    imageUrl: string;
    startDate: Date;
    endDateTime: Date;
    price?: number;
    isFree?: boolean;
    url?: string;
    category?: {id:string, name:string};
    organizer?: {_id:string, firstName:string, lastName:string};
}

const EventSchema = new Schema({
    title:{type:String, required:true},
    description:{type:String},
    location:{type:String},
    createdAt:{type:Date,default:Date.now},
    imageUrl:{type:String,required:true},
    startDate:{type:Date,required:true},
    endDateTime:{type:Date,required:true},
    price:{type:Date},
    isFree:{type:Date,default:false},
    url:{type:String},
    category:{type:Schema.Types.ObjectId,ref:'Category'},
    organizer:{type:Schema.Types.ObjectId,ref:'User'}

})

const Event = models.Event || model('Event',EventSchema);

export default Event