import mongoose from "mongoose";

let connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB)
        console.log("Connected to DB*");
    } catch (error) {
        console.log("Database error", error.message)
    }
}

export { connectDB }