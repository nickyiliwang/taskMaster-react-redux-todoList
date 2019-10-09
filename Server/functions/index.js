const functions = require("firebase-functions");
const app = require("express")();

const cors = require("cors");
app.use(cors());

const { getTodos, addTodo, deleteTodo } = require("./handles/dataRoutes");

app.get("/", getTodos);
app.post("/add", addTodo);
app.options("/todo/:todoId", cors());
app.delete("/todo/:todoId", cors(), deleteTodo);

// adding prefix
exports.api = functions.https.onRequest(app);
