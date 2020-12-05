import express from "express";
import {
  getProducts,
  getProductById,
} from "../controller/productController.js";
const router = express.Router();

router.route("/").get(getProducts);

router.route("/:id").get(getProductById);

export default router;

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

// router.get(
//   "/",
//   asyncHanlder(async (req, res) => {
//     const products = await Product.find({});

//     res.json(products);
//   })
// );

// @desc Fetch single product by id
// @route GET /api/product/:id
// @access Public

// router.get(
//   "/:id",
//   asyncHanlder(async (req, res) => {
//     const product = await Product.findById(req.params.id);

//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404);
//       throw new Error("Product not Found");
//     }
//   })
// );
