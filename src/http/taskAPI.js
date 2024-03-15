import { $authHost } from ".";

export const create_task = async (title, time_end) => {
    const {data} = await $authHost.post('api/task', {title, time_end})
    data
}
export const change_task = async (title, time_end) => {
    const {data} = await $authHost.put('api/task/:id', {title, time_end})
    return data
}
export const delete_task = async () => {
    const {data} = await $authHost.delete('api/task/:id')
    return data
}
export const getAll = async () => {
    const {data} = await $authHost.get('api/task')
    return data
}