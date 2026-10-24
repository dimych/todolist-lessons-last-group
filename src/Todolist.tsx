import {TodolistHeader} from './TodolistHeader'
import {Task} from './Task'
import {TodolistFilter} from './TodolistFilter'

// clousure, замыкание
// react
type TodolistProps = {
    title: string
}
export function Todolist(props: TodolistProps) {
    console.log(props.title)
    return <div>
        <TodolistHeader headerTitle={props.title} />
        <ul>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
        </ul>
        <TodolistFilter />
    </div>
}
