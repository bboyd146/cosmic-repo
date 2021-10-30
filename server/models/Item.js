const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const itemSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0.99
        },
        quantity: {
            type: Number,
            min: 0,
            default: 0
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        genre: {
            type: Schema.Types.ObjectId,
            ref: 'Genre',
            required: true
        }
    }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
