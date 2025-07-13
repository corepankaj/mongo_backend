const mongoose = require("mongoose");
const studentSceama = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    phone:{
        type:Number,
        require: true
    }
})
const Student = mongoose.model("Student", studentSceama);
module.exports = Student;