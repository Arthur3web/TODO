import { $authHost } from ".";
import { jwtDecode } from "jwt-decode";

export const create_task = async (title, time_end) => {
    const {data} = await $authHost.post('api/task', {title, time_end})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const change_task = async (title, time_end) => {
    const {data} = await $authHost.put('api/task/:id', {title, time_end})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const delete_task = async () => {
    const {data} = await $authHost.delete('api/task/:id')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const getAll = async () => {
    const {data} = await $authHost.get('api/task')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}