const productService = require('../service/productService');
const {defaultResponse, productMessage} = require('../constants');


let createProduct = async (req, res) => {
    let response = {
        ...defaultResponse
    }
    try {
        const productResponse = await productService.createProduct(req.body);
        response.status = 200;
        response.message = productMessage.Created;
        response.body = productResponse;

    } catch (err) {
        response.message = `Error Form ${err.message}`;
    }
    return res
        .status(response.status)
        .send(response);

}

// Product Fetch Controller

let getAllProducts = async (req, res) => {
    let response = {
        ...defaultResponse
    }
    try {
        const productResponse = await productService.getAllProducts(req.query);
        response.status = 200;
        response.message = productMessage.Fetched;
        response.body = productResponse;

    } catch (err) {
        response.message = `Error Form ${err.message}`;
    }
    return res
        .status(response.status)
        .send(response);

}


//Single Product Fetch By ID Controller
let getProductByID = async (req, res) => {
    let response = {
        ...defaultResponse
    }
    try {
        const productResponse = await productService.getProductByID(req.params);
        response.status = 200;
        response.message = productMessage.Fetched;
        response.body = productResponse;

    } catch (err) {
        response.message = `Error Form ${err.message}`;
    }
    return res
        .status(response.status)
        .send(response);

}


//Single Product Fetch By ID Controller
let productUpdate = async (req, res) => {
    let response = {
        ...defaultResponse
    }
    try {
         const productResponse = await productService.productUpdate({id : req.params.productID , updateInfo : req.body });
        response.status = 200;
        response.message = productMessage.Updated;
        response.body = productResponse;

    } catch (err) {
        response.message = `Error Form ${err.message}`;
    }
    return res
        .status(response.status)
        .send(response);

}



module.exports = productController = {
    createProduct,
    getAllProducts,
    getProductByID,
    productUpdate
};