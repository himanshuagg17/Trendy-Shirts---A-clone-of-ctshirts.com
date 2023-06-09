const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {type:String, required:true},
    price: {type:Number, required:true},
    category: {type:String, required:true},
    image: {type:String, required:true},
    description: {type:String, required:true},
    rating: {type:Number, required:true}
},{
    versionKey: false
});

const ProductModel = mongoose.model('product',productSchema);

//Export model
module.exports = { ProductModel };