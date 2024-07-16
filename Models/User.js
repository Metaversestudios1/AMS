import mongoose from "mongoose"
const { v4: uuidv4 } = require('uuid');

const UserSchema = new mongoose.Schema({
    name: {type: String, required:true},
    emp_id: { type: String, default: uuidv4, unique: true },
    password: {type: String},
    email: {type: String, required:true},
    contact: {type: Number},
    designation: {type: String},
    joining_date: {type: String}
})


mongoose.models = {};
export default mongoose.model('User', UserSchema);
