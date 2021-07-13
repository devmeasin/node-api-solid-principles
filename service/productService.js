const Product = require('../database/models/productModel');
const {formatMongoData , checkObjectId} = require('../helper/dbHelper');
const {productMessage} = require('../constants')

// Create Product Service
let createProduct = async (getData) => {
    try {
        let product = new Product({
            ...getData
        })
        let result = await product.save();
        return formatMongoData(result);
    } catch (err) {
        console.log("Something went wrong From ProductService : createProduct", err.message);
        throw new Error(err.message);
    }
}

// get All Product From Database Service
let getAllProducts = async ({skip = 0, limit = 10}) => {
    try {
        let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
        return formatMongoData(products);
    } catch (err) {
        console.log("Something went wrong From ProductService : getAllProduct", err.message);
        throw new Error(err.message);
    }
}

// get All Product From Database Service
let getProductByID = async ({productID}) => {
    try {
        checkObjectId(productID)
        let product = await Product.findById(productID);
        if(!product) {
            throw new Error(productMessage.NotFound);
        }
        return formatMongoData(product);
    } catch (err) {
        console.log("Something went wrong From  ProductService : getProductByID", err.message);
        throw new Error(err.message);
    }
}



// get All Product From Database Service
let productUpdate = async ({id, updateInfo}) => {
    try {
        checkObjectId(id)
        let product = await Product.findOneAndUpdate({_id : id} ,updateInfo , {new : true} );
        if(!product) {
            throw new Error(productMessage.NotFound);
        }
        return formatMongoData(product);
    } catch (err) {
        console.log("Something went wrong From  ProductService : productUpdate", err.message);
        throw new Error(err.message);
    }
}

module.exports = productService = {
    createProduct,
    getAllProducts,
    getProductByID,
    productUpdate
};