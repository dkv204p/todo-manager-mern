const express = require("express");
const Todo = require("../models/Todo");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get todos for the logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user.id });
    res.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Error fetching todos" });
  }
});

// Add a new todo (Private)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const newTodo = new Todo({ task: req.body.task, userId: req.user.id });
    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    console.error("Error adding todo:", error);
    res.status(500).json({ error: "Error adding todo" });
  }
});

// Delete a todo (Only the owner can delete)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });

    if (todo.userId.toString() !== req.user.id) {
      return res.status(403).json({ error: "Unauthorized to delete this todo" });
    }

    await todo.deleteOne();
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ error: "Error deleting todo" });
  }
});

module.exports = router;
