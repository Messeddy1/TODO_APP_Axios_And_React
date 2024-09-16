import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  Container } from "react-bootstrap";
import Todo from "./TodoList/Todo.jsx";
import Layout from "./Compenantes/Layout.jsx";
import TodoForm from "./Compenantes/TodoForm.jsx";
import Update from "./Compenantes/Update.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container className="mt-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Todo />} />
            <Route path={"/todos/create"} element={<TodoForm />} />
            <Route path={"/todos/:id/update"} element={<Update />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  </StrictMode>
);
