
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const studentRoutes = require("./routes/students.routes");

mongoose.connect("mongodb://localhost:27017/students-crud")
.then(()=>{
    console.log("Connected to mongoDB");

}).catch((err)=>{

    console.log("not connectd"+err);
})

app.use(express.urlencoded({extended:false}))
// Enable CORS for all origins
app.use(cors());
app.use(express.json())

app.use("/api/students",studentRoutes);

app.listen(8000,()=>{
    console.log("Server runing on port no 80000");
})