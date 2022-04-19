const mongoose = require("mongoose");

const FacilitySchema = new mongoose.Schema(
    {
        title: {
            type : String,
            required : true,
            unique : true
        },
        vendertype: {
            type : Array,
            required : true,
        },
        description: {
            type : String,
            required : true,          
        },
        icons: {
            type : String,
            default: "", 
        },
    },
); 

module.exports = mongoose.model("Facility", FacilitySchema);