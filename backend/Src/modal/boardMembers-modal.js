const mongoose = require("mongoose");

const boardMembersSchema = new mongoose.Schema({
    boardMemberName: { 
        type: String, 
        required: true 
    },
    designation:{
        type:String,
        required: true  
    },
    description:{
        type:String,
        required: true  
    },
    avatar:{
        type: String
    },
    cloudinary_id: {
        type: String
    },
});

module.exports = mongoose.model("members",boardMembersSchema);