/*------------------------------ Starter Code ------------------------------*/
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import Todo from "./models/todo.js";
import User from "./models/user.js";

const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');
  await runQueries()

  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');
  process.exit();
};

connect()

/*----------------------------- Query Functions -----------------------------*/

const createTodo = async () => {
  const todoData = {
    text: "become good at piano",
    isComplete: true,
  };
  const todo = await Todo.create(todoData);
  console.log("New todo:", todo);
};

const findTodos = async () => {
//   const todos = await Todo.find({});
//   console.log("All todos:", todos);

  const todos = await Todo.find({}).populate("assignee");
  console.log("All todos:", todos);
};

const createSubtask = async () => {
    // Assume that the todo we want to create a
    // sub-task for has the following id:
    const todoId = "66fae704b30344e14b3fb7fe";

    // Look up the todo by id, assign the returned object to `todo`
    const todo = await Todo.findById(todoId);
    console.log(todo)
  
    const subtaskData = {
      text: "Learn how props work",
      isComplete: false,
    };
  
    // Push the new sub-task data into the subtasks array on the todo:
    todo.subtasks.push(subtaskData);

    // Save the parent document:
    await todo.save();
    console.log("Modified todo:", todo);
  };

  const createUser = async () => {
    const userData = {
        name: "Alex",
        email: "alex@mail.com"
    }
    await User.create(userData);
  }


const assignTodo = async () => {
    
    const todoId = '66faefb976432fd04583ce2a';
    const userId = '66faee8f1c7b5b538b329656';
  
    const updatedTodo = await Todo.findByIdAndUpdate(
      todoId,
      { assignee: userId },
      { new: true }
    );
  
    console.log('Updated document:', updatedTodo);
  };
  
  

/*------------------------------- Run Queries -------------------------------*/

const runQueries = async () => {
  console.log('Queries running.');
    // await createTodo();
    // await createSubtask();
    // await createUser();
    // await assignTodo();
    await findTodos();
};
