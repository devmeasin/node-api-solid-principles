const Product = require('../database/models/productModel');

module.exports.createProduct = async (getData) => {
    try {
        let product = new Product({
            ...getData
        })
        let result = await product.save();
        return result.toObject();
    } catch (err) {
        console.log("Something went wrong From : ProductService", err.message);
        throw new Error(err.message);
    }
}