const router = require('express').Router();
const Facility = require('../models/Facility');


//for creating new facilitylist

router.post("/", async (req, res) =>{
    const newFacility = new Facility(req.body);
    try{
        const data = await newFacility.save();
        res.status(200).json({
            status:'ok',
            message:'kkkjkjhkjjk',
            data
        });
    }catch (err) {
        res.status(500).json({
            status:'Error occured',
            message: 'nmjjhhjhj. '
        });
    }
});




router.get("/:vendertype",async (req, res) =>{
    const vendertype = req.params.vendertype;
    
    try{
        let data;
        data = await Facility.find({vendertype:vendertype});
        res.status(200).json({
            status:'ok',
            message:'kkkjkjhkjjk',
            data
        });
    } catch (err) {
        res.status(500).json({
            status:'Error occured',
            message: 'nmjjhhjhj. '
        });
    }
});

module.exports = router;