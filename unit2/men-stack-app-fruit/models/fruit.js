import mongoose from 'mongoose';

// const fruitSchema = new mongoose.Schema({
//     name: String,
//     ripe: Boolean,
// });

// const Fruit = mongoose.model('Fruit', fruitSchema);

// export { Fruit };

export default mongoose.model('Fruit', new mongoose.Schema({
        name: String,
        ripe: Boolean,
    }))