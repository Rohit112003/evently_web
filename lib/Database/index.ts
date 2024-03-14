import mongoose from 'mongoose'
const MONGODB_URI = process.env.MONGODB_URI

let cached = (global as any).mongoose || {conn:null, promise:null};

export const connecToDatabase = async  ()=>{
    if(cached.conn) return cached.conn;

    if(!MONGODB_URI) throw new Error("MONGODB_URI not available")

    cached.promise  = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName:'evently',
        bufferCommands:false
    })

    cached.conn = await cached.promise;
    return cached.conn;
}





//MRC4IhEC5nh1PrEo