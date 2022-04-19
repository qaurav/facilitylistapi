const router = require('express').Router();
const Vendertype = require('../models/Vendertype');

router.post("/",async (req,res) =>{
const newVendertype = new Vendertype(req.body);
try{
    const data = await newVendertype.save();
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

router.get("/",async (_req, res) =>{
    try{
        const data = await Vendertype.find();
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
    


module.exports = router;