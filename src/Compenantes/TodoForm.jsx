/* eslint-disable react/prop-types */
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TodoApi from "../API/TodoApi";
const TodoForm = () => {
  const [count, setCount] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await TodoApi.getTodo();
      setCount(data.length);
    })();
  }, []);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    TodoApi.addTodo({
      title: data.title,
      completed: data.completed || false,
      id: count + 1,
    }).then((response) => window.history.back());
    reset();
  };
  const reset = () => {
    document.getElementById("todoForm").reset();
  };
  return (
    <Fragment>
      <h1 className="text-center">Add To-Do</h1>
      <form onSubmit={handleSubmit(onSubmit)} id="todoForm">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="title"
            {...register("title", {
              required: "Title is required",
            })}
          />
          <small className="text-danger">{errors.title?.message}</small>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            {...register("completed")}
          />
          <label className="form-check-label" htmlFor="completed">
            Complete
          </label>
        </div>
        <input
          type="submit"
          disabled={!isValid}
          className="btn btn-primary mt-2"
          value="Create"
        />
      </form>
    </Fragment>
  );
};

export default TodoForm;
