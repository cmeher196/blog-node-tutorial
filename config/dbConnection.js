import mongoose from "mongoose";


// const config = process.env;

const connectToDB = async()=>{
    try {
        const connection =  await mongoose.connect(`mongodb+srv://admin:${process.env.DATABASE_PASSWORD}@cluster0.wubil.mongodb.net/blog_db?retryWrites=true&w=majority`);
        if(connection)
            console.log(`connected to mongodb`);
    } catch (error) {
        console.log(`DB connection error: ${error.message}`);
    }
    
} 

export default connectToDB;
