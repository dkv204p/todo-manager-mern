import { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const TodoForm = ({ fetchTodos }) => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      console.log("Token being sent:", token); // Debugging
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/todos`,
        { task },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Todo added:", response.data); // Debugging
      setTask("");
      fetchTodos();
    } catch (err) {
      console.error("Error adding todo:", err.response?.data || err.message); // Debugging
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group>
        <Form.Control
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          required
        />
      </Form.Group>
      <Button type="submit" className="mt-2">
        Add Todo
      </Button>
    </Form>
  );
};

export default TodoForm;
