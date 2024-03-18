import { $authHost } from ".";

export const create_task = async (title, timeend) => {
    const {data} = await $authHost.post('api/task', {title, timeend})
    return data
}
export const change_task = async (id, newData) => {
    const {data} = await $authHost.put(`api/task/${id}`, newData)
    return data
}
export const delete_task = async (id) => {
    const {data} = await $authHost.delete('api/task/' + id)
    return data
}
export const getAll = async (filterBy, sortBy, selectedStatus) => {
    const {data} = await $authHost.get('api/task', {
        params: { filterBy, sortBy, selectedStatus }, // Передаем параметры фильтрации и сортировки в запросе
      });
    return data
}