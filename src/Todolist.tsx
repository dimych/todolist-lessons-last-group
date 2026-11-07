import {TodolistHeader} from './TodolistHeader'
import {Task} from './Task'
import {TodolistFilter} from './TodolistFilter'
import {TodolistType} from "./App.tsx";
import {useState} from "react";

// clousure, замыкание
// react

// fibers tree: {
// type: App, state, props,
//          children: [ {type: Totolist, state, props} ,{state, props}, {}] }
type TodolistProps = {
    todolist: TodolistType
    onDelete: (id: number) => void
}
export function Todolist(props: TodolistProps) {
    const [counter, setCounter] = useState(0)
    console.log('rerendering todolist: ' + props.todolist.title)

    return <div>
        <TodolistHeader headerTitle={props.todolist.title} tasksCount={props.todolist.tasks.length} />
        <button onClick={() => props.onDelete(props.todolist.id) }>delete</button>
        <span onClick={ () => { setCounter(counter + 1) }  }>{counter}</span>
        <ul>
            {
                props.todolist.tasks.map((t) =>  <Task key={t.id} task={t} />)
            }
        </ul>
        <TodolistFilter />
    </div>
}