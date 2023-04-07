const express =require('express') 
const {getAllTour,search,createTour,updateTour,deletTour}=require('../controller/tourController')
const router=express.Router();


router.get('/',(req,res)=> {
    getAllTour().then((data)=>res.status(200).json(data)).catch((err)=>res.status(500).send("err found"))
})

router.get("/:title",(req,res)=>{
    search(req.params.title).then((data)=>res.status(200).json(data))
    .catch((err)=>res.status(500).send(err))
})


router.put("/:id",(req,res)=>{
    
    updateTour(req.params.id,req.body).then((data)=>res.status(200).json(data))
    
    .catch((err)=>res.status(500).send(err))
})

router.delete("/:id",(req,res)=>{
    deletTour(req.params.id).then((data)=>res.status(200).json(data))
    .catch((err)=>res.status(500).send(err))
})

router.post("/add",(req,res)=>{
    createTour(req.body).then((data)=>res.status(200).json(data))
    .catch((err)=>res.status(500).send(err))
})


module.exports = router
