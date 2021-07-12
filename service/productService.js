const Product = require('../database/models/productModel');
const {formatMongoData} = require('../helper/dbHelper')

// Create Product Service
let createProduct = async (getData) => {
    try {
        let product = new Product({
            ...getData
        })
        let result = await product.save();
        return formatMongoData(result);
    } catch (err) {
        console.log("Something went wrong From : ProductService", err.message);
        throw new Error(err.message);
    }
}


// get All Product From Database Service
let getAllProducts = async ({skip = 0, limit = 10}) => {
    try {
        let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
        return formatMongoData(products);
    } catch (err) {
        console.log("Something went wrong From : ProductService", err.message);
        throw new Error(err.message);
    }
}

module.exports = productService = {
    createProduct,
    getAllProducts
};