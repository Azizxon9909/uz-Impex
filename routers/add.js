const express = require("express");
const ProductSchema = require('../model/products')
const router = express.Router();

router.get("/add", (req, res) => {
    res.render("add_product", {
        title: "products",
        update: "Maxsulot qo'shish"
      });
  });

  router.post('/add', (req,res)=>{
    db = new ProductSchema({
        title: req.body.title,
        about: req.body.about,
        photo: "/Images/"+req.body.photo
    })
    db.save((err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/product')
        }
    })
})

  module.exports = router;