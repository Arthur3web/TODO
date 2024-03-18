import { $authHost } from ".";

export const createTask = async (title, timeend) => {
  const { data } = await $authHost.post("api/task", { title, timeend });
  return data;
};
export const changeTask = async (id, newData) => {
  const { data } = await $authHost.put(`api/task/${id}`, newData);
  return data;
};
export const deleteTask = async (id) => {
  const { data } = await $authHost.delete("api/task/" + id);
  return data;
};
export const getAll = async (filterBy, sortBy, selectedStatus) => {
  const { data } = await $authHost.get("api/task", {
    params: { filterBy, sortBy, selectedStatus },
  });
  return data;
};
