import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    sub:String,
    name: String,
    email: String,
    phone: String,
    group: String,
    department: String,
    location: String,
});