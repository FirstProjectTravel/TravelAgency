const express =require('express') 
const {getAllBook,search,createBook,updateBook,deletBook}=require('../controller/bookController')
const router=express.Router();
const User =require("../models/User")
const Tour =require("../models/Tour")
router.get('/',(req,res)=> {
    getAllBook().then((data)=>res.status(200).json(data)).catch((err)=>res.status(500).send("err found"))
})

router.get("/:username",(req,res)=>{
    search(req.params.username).then((data)=>res.status(200).json(data))
    .catch((err)=>res.status(500).send(err))
})


router.put("/:id",(req,res)=>{
    
    updateBook(req.params.id,req.body).then((data)=>res.status(200).json(data))
    
    .catch((err)=>res.status(500).send(err))
})

router.delete("/:id",(req,res)=>{
    deletBook(req.params.id).then((data)=>res.status(200).json(data))
    .catch((err)=>res.status(500).send(err))
})


router.post("/add/:userid/:tourid",(req,res)=>{
    const { userid, tourid } = req.params;
    const { startDate, endDate } = req.body;

    Promise.all([
      User.findById(userid),
      Tour.findById(tourid)
    ])
    .then(([user, tour]) => {
      if (!user || !tour) {
        throw new Error('Invalid user or tour id');
      }
      return createBook(user,tour, tour.title, tour.price, startDate, endDate);
    })
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

module.exports = router
