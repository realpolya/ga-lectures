import { Schema, model } from 'mongoose';

export default model('Pet', new Schema({
    name: {
        type: String,
        required: true, 
    },
    age: {
        type: Number,
        min: 0,
    },
    breed: {type: String},
}));

