const mongoose = require("mongoose");

const VendortypeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        }
    },
); 

module.exports = mongoose.model("Vendortype", VendortypeSchema);