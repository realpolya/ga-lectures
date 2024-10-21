import mongoose from 'mongoose';

export default mongoose.model('User', new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    hashedPassword: {
        type: String,
        required: true,
    }
}))