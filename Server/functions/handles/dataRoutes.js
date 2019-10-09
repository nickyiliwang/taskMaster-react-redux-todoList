const { db } = require("../util/admin");

exports.getTodos = (req, res) => {
  db.collection("todos")
    .get()
    .then(data => {
      let todos = [];
      data.forEach(doc => {
        const data = doc.data();
        todos.push({
          todoId: doc.id,
          body: data.body,
          userHandle: data.userHandle,
          completed: data.completed,
          completeBy: data.completeBy,
          createdAt: data.createdAt,
          priority: data.priority
        });
      });
      return res.json(todos);
    })
    .catch(err => console.error(err));
};

exports.addTodo = (req, res) => {
  if (req.body.body.trim() === "") {
    return res.status(400).json({ body: "Body must not by empty" });
  }

  const newTodo = {
    body: req.body.body,
    createdAt: new Date().toISOString(),
    completed: false,
    completeBy: req.body.completeBy,
    priority: req.body.priority
  };

  db.collection("todos")
    .add(newTodo)
    .then(doc => {
      const resTodo = newTodo;
      resTodo.todoId = doc.id;
      res.json(resTodo);
    })
    .catch(err => {
      res.status(500).json({ error: "BEEPBOOP Malfunction!" });
      console.error(err);
    });
};

exports.deleteTodo = (req, res) => {
  const document = db.doc(`/todos/${req.params.todoId}`);
  document
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Todo not found" });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      res.json({ message: "todo deleted successfully" });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};
