const router = require('express').Router();
const {createProduct , getAllProducts} = require('../controller/productController');
const {productCreateSchema, productQuerySchema} = require('../apiSchema/productSchema');
const {validateBodyData , validateQueryData} = require('../middleware/joiSchemaValidation');

router.get('/',validateQueryData(productQuerySchema), getAllProducts);
router.post('/',validateBodyData(productCreateSchema), createProduct);


module.exports = router;