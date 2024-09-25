
import { config } from 'dotenv';
config();
import { connect as _connect, disconnect } from 'mongoose';
import mongoose from 'mongoose';
import { Todo } from "./models/todo.js";

const createTodo = async () => {
    
    const todoData = {
        text: "Finalize Battleship game",
        isComplete: false,
    };

    const todo = await Todo.create(todoData);
    console.log("New todo: ", todo);

}

const connect = async () => {
    // Connect to MongoDB using the MONGODB_URI specified in our .env file.
    await _connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Call the runQueries function, which will eventually hold functions to work
    // with data in our db.
    await runQueries();

    // Disconnect our app from MongoDB after our queries run.
    await disconnect();
    console.log('Disconnected from MongoDB');

    // Close our app, bringing us back to the command line.
    process.exit();
};

const runQueries = async () => {
  
    console.log('Queries running.');
    await findTodos();
    await findOne();
    //await createTodo();

};

const findTodos = async () => {
    const todos = await Todo.find({});
    console.log("All todos: ", todos);
}

const findOne = async () => {
    const todo = await Todo.findOne({ text: "Learn CSS"});
    console.log("Find one found this one ", todo);
}

connect()
/*------------------------------ Query Functions -----------------------------*/
