const router = require('express').Router();
const {createProduct , getAllProducts , getProductByID , productUpdate} = require('../controller/productController');
const {productCreateSchema, productQuerySchema , productUpdateSchema} = require('../apiSchema/productSchema');
const {validateBodyData , validateQueryData} = require('../middleware/joiSchemaValidation');



router.put('/:productID',validateBodyData(productUpdateSchema), productUpdate);
router.get('/:productID', getProductByID);
router.get('/',validateQueryData(productQuerySchema), getAllProducts);
router.post('/',validateBodyData(productCreateSchema), createProduct);


module.exports = router;