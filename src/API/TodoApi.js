import CustomAxios from "./axios";

export default {
  getTodo: async () => {
    const data = await CustomAxios.get("/");
    return data.data;
  },
  getTodoById: async (id) => {
    const data = await CustomAxios.get(`/${id}`);
    return data.data;
  },
  addTodo: async (data) => {
    return await CustomAxios.post("/", data);
  },
  updateTodo: async ( updatedData) => {
    return await CustomAxios.put(`/${updatedData.id}`, updatedData);
  },
  deleteTodo: async (id) => {
    return await CustomAxios.delete(`/${id}`);
  },
};
