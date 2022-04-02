import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    username: {
        type: String,
        required: true,
        unique:true,
    },
    email: {
        type: String,
        unique:true,
        trim:true,
    },
    phone: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    role:{
        type:String,
        enum: ['user', 'trainer', 'HR'],
        default: 'user',
        required:true,
    },
    payment:{
        type: Number,
        default: 0
        
    },
    banned: {
        type: Boolean,
        default: false,
    },
})

export interface UserData{
    firstname:string,
    lastname: string,
    username: string,
    email:string,
    phone:string,
    password:string,
    avatar:string,
    role:string,
    banned: boolean

}