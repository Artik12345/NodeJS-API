import axios from 'axios'
import { ToDoItem } from './interfaces/ToDoItem'

const baseURL = 'http://localhost:8000'

const resData = (res: any) => res.data;

const request = {
    delete: (url: string) =>
      axios.delete(`${baseURL}${url}`).then(resData),
    get: (url: string, id?: string) =>
      axios.get(`${baseURL}${url}`).then(resData),
    put: (url: string, body: any) =>
      axios.put(`${baseURL}${url}`, body).then(resData),
    post: (url: string, body: any) =>
      axios.post(`${baseURL}${url}`, body).then(resData),
};

export const toDoApi = {
    getToDoList: () => request.get('/todolist/getToDoList.action'),
    getToDoById: (id: string) => request.get(`/todolist/getToDoById.action/${id}`),
    createToDo: (body: ToDoItem) => request.post(`/todolist/createToDo.action`, body),
    deleteToDoById: (id: string) => request.delete(`/todolist/deleteToDoById.action/${id}`),
    editToDoById: (id: string, body: ToDoItem) => request.put(`/todolist/editToDoById.action/${id}`, body),
}