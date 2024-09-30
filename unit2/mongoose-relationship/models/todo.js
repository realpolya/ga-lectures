import mongoose from "mongoose";

// subschema does not become a model
const subtaskSchema = new mongoose.Schema({
    text: String,
    isComplete: Boolean,
})

export default mongoose.model("Todo", new mongoose.Schema({
    text: String,
    isComplete: Boolean,
    subtasks: [subtaskSchema], // embedded schema
    assignee: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' // Reference to the User model
    }
}))