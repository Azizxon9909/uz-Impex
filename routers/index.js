const express = require("express");
const ProductSchema = require('../model/products')
const router = express.Router();

router.get("/", (req, res) => {
    ProductSchema.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.render("index", {
          title: "UzImpex",
          datas: data,
        });
      }
    });
  });

  module.exports = router;