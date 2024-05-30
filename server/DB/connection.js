import mongoose from "mongoose";
const connection =async()=>{
    try{
    await mongoose.connect(`${process.env.DB}`);
    console.log('connected')
    }catch(error){
        console.log('error to connect DB')
    }
}
export default connection