import express from "express";
import Product from "../models/productModel.js";
import asyncHanlder from "express-async-handler";

const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get(
  "/",
  asyncHanlder(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

// @desc Fetch single product by id
// @route GET /api/product/:id
// @access Public
router.get(
  "/:id",
  asyncHanlder(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  })
);

export default router;
