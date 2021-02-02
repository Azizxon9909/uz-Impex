const express = require("express");
const ProductSchema = require('../model/products')
const router = express.Router();

router.get("/product", (req, res) => {
    ProductSchema.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.render("product_list", {
          title: "Products",
          datas: data,
        });
      }
    });
  });
  router.get("/product/:id", (req, res) => {
    ProductSchema.findById(req.params.id, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.render("add_product", {
          title: "Malumotlarni ozgartirish",
          datas: data,
          update: "Maxsulotni yangilash",
        });
      }
    });
  });
  router.post("/product/:id", (req, res) => {
    const updateDb = {};
    (updateDb.title = req.body.title),
    (updateDb.about = req.body.about),
    (updateDb.photo ="/images/"+ req.body.photo);
    const resUpdateId = { _id: req.params.id };
  
    ProductSchema.update(resUpdateId, updateDb, (err) => {
      if (err) console.log(err);
      else {
        res.redirect("/product");
      }
    });
  });
  router.get("/remove/:id", (req, res) => {
    
    const resUpdateId = { _id: req.params.id };
  
    ProductSchema.remove(resUpdateId, (err) => {
      if (err) console.log(err);
      else {
        res.redirect("/product");
      }
    });
      
    });

  module.exports = router;