import { mongoose } from "mongoose";
import { isEmail, isStrongPassword } from "validator";
let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxLength: 20,
        minLength: 4
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        valdate: [isEmail, "invalid email"]
    },
    password: {
        type: String,
        maxLength: 20,
        minLength: 8,
        validate: [isStrongPassword, "weak password"], 
        required: true
    }, 
    imagePath: {
        type: String,
        required: true
    }

})

let users = mongoose.module('users', userSchema)

export default users