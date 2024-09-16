import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import TodoApi from "../API/TodoApi";
const Update = () => {
  const { id } = useParams();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm();
  const [todo,setTodo]=useState()
  useEffect(() => {
    (async () => {
      const data = await TodoApi.getTodoById(id);
      setTodo(data);

    })();
  }, [id]);
  const onSubmit = async (data) => {    
    await TodoApi.updateTodo({
        id: todo?.id,
       ...data,
    }).then(() => {
        window.history.back();
      });
  };
  return (
    <Fragment>
      <h1 className="text-center">Update</h1>
      <form onSubmit={handleSubmit(onSubmit)} id="todoForm">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
          defaultValue={todo?.title}
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
          defaultChecked={todo?.completed}
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

export default Update;
