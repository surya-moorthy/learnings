import mongoose, { model, Schema } from "mongoose";

const Database_url = "mongodb://mongoadmin:password@localhost:27017"

mongoose.connect(Database_url);

const userSchema = new Schema({
    username : {type : String},
    password : {type : String, required : true},
    email : {type : String,required : true}
})

export const UserModal = model("Users",userSchema);