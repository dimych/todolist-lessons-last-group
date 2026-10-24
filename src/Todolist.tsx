import {TodolistHeader} from './TodolistHeader'
import {Task} from './Task'
import {TodolistFilter} from './TodolistFilter'

export function Todolist() {
    return <div>
        <TodolistHeader />
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
