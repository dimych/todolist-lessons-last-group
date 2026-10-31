import {TodolistHeader} from './TodolistHeader'
import {Task} from './Task'
import {TodolistFilter} from './TodolistFilter'
import {TodolistType} from "./App.tsx";

// clousure, замыкание
// react
type TodolistProps = {
    todolist: TodolistType
}
export function Todolist(props: TodolistProps) {
    console.log('rerender todolist: ' + props.todolist.title)
    return <div>
        <TodolistHeader headerTitle={props.todolist.title} tasksCount={props.todolist.tasks.length} />
        <ul>
            {
                props.todolist.tasks.map((t) =>  <Task key={t.id} task={t} />)
            }
        </ul>
        <TodolistFilter />
    </div>
}