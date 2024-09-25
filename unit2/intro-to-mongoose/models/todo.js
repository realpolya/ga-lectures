import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    text: String,
    isComplete: Boolean,
});

export const Todo = mongoose.model('Todo', todoSchema);

// module.exports = Todo;


// CRUD - Create, Read, Update, Delete
