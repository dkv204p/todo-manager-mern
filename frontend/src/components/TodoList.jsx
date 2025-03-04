import axios from "axios";
import { ListGroup, Button } from "react-bootstrap";

const TodoList = ({ todos, fetchTodos }) => {
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${import.meta.env.VITE_API_URL}/todos/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTodos();
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroup.Item key={todo._id} className="d-flex justify-content-between align-items-center">
          {todo.task}
          <Button variant="danger" size="sm" onClick={() => handleDelete(todo._id)}>
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodoList;
