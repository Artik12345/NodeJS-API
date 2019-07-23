import { ToDoCategories } from './ToDoCategories';

export interface ToDoItem {
    title: string;
    description: string,
    category: ToDoCategories,
    id: string
}