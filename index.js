const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

///routes

const facilityRoute = require('./routes/facilities');
const vendertypeRoute = require('./routes/vendertypes');



dotenv.config();


app.use(express.json());

mongoose.connect(process.env.url)
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));


//middleware
const storage = multer.diskStorage({
   destination:(req, file, callback) =>{
       callback(null, path.join(path.dirname(__dirname), 'uploads'));
   },
   filename:(req, file, callback) => {
        callback(null, file.originalname);
   },
});

const upload = multer({storage:storage});
app.post('/uploads',upload.single("file"), (req,res) => {
    res.status(200).json({
        status:'ok',
        message:'Icon uploaded',
    });
})



//
app.use("/facilities", facilityRoute);
app.use("/vendertypes", vendertypeRoute);

app.listen(80, () => {
    console.log("Backend is running\n listening on port 80")
})