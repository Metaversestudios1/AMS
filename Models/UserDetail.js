
import mongoose from "mongoose";
const UserDetailSchema = new mongoose.Schema({
    emp_id: { type: String},
    img:{type: String},
    salary:{type: Number},
    leave_requests:[
        {
			leave_type:	{type: String},
			leave_from:	{type: String},
			leave_to:	{type: String},
			no_of_days:	{type: Number},
			status:	{type: String},
			reason:	{type: String},
		}
    ],
    total_leaves:[
        {
			leave_type:	{type: String},
			leave_from:	{type: String},
			leave_to:	{type: String},
			no_of_days:	{type: Number},
			status:	{type: String},
			reason:	{type: String},
		}
    ],
    attendance: [
        {	
			date:{type:String},
			full_name:{type:String},	
			check_in:{type:String},	
			check_out:{type:String},	
			working_hours:{type:String},	
			status:{type:String},	
		}
    ]
})


mongoose.models = {};
export default mongoose.model('UserDetail', UserDetailSchema);
