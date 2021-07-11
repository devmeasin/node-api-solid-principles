const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : String,
    brand : String,
    price : Number
},{
    timestamps : true,
    toObject : {
        transform(doc , ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
});


module.exports = mongoose.model('Product', productSchema);