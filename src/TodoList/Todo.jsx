import { Fragment, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import API from "../API/TodoApi.js";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await API.getTodo();
      setTodos(data);
    })();
  }, []);
  const handleDelete = async (e) => {
    e.preventDefault();
    const id = parseInt(e.currentTarget.value);
    await API.deleteTodo(id).then((response) => {
      setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    });
  };
  return (
    <Fragment>
      <h1 className="text-primary">To-Do List</h1>
      <hr />
      <Table
        responsive
        bordered
        hover
        variant="primary"
        className="text-center"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td
                className={`${
                  todo.completed
                    ? "text-decoration-line-through"
                    : "text-decoration-none"
                }`}
              >
                {todo.title}
              </td>
              <td>{todo.completed ? "Yes" : "No"}</td>
              <td>
                <Button
                  className="me-2"
                  variant={"danger"}
                  value={todo.id}
                  onClick={handleDelete}
                >
                  Delete
                </Button>
                <Link
                  className="text-decoration-none text-light btn btn-success"
                  to={`/todos/${todo.id}/update`}>
                  Edite
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default Todo;
