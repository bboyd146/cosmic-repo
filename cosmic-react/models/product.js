const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            trim: true,
            required: true
        },
        img: {
            data: Buffer, 
            contentType: String
        }
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
