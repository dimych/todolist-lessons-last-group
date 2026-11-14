import {TodolistHeader} from './TodolistHeader'
import {Task} from './Task'
import {FilterValueType, TodolistFilter} from './TodolistFilter'
import {TaskType, TodolistType} from "./App.tsx";
import {useState} from "react";

// clousure, замыкание
// react

// fibers tree: {
// type: App, state, props,
//          children: [ {type: Totolist, state, props} ,{state, props}, {}] }
type TodolistProps = {
    todolist: TodolistType
    onDelete: (id: number) => void
    onTaskStatusChange: (todolistId: TodolistType['id'],
                         taskId: TaskType['id'], status: boolean) => void
}
export function Todolist(props: TodolistProps) {
    const [counter, setCounter] = useState(0)

    // BLL
    const [filterValue, setFilterValue] = useState<FilterValueType>('all')

    const handleFilterChange = (filterValue: FilterValueType) => {
        setFilterValue(filterValue)
    }


    console.log('rerendering todolist: ' + props.todolist.title)

    return <div>
        <TodolistHeader headerTitle={props.todolist.title} tasksCount={props.todolist.tasks.length} />
        <button onClick={() => props.onDelete(props.todolist.id) }>delete</button>
        <span onClick={ () => { setCounter(counter + 1) }  }>{counter}</span>
        <ul>
            {
                props.todolist.tasks
                    .filter((t) => {
                        // all => isDone: true/false
                        // completed => true
                        // active => false
                        if (filterValue === 'all') return true
                        if (filterValue === 'completed') return t.isDone
                        if (filterValue === 'active') return !t.isDone
                    })
                    .map((t) =>  <Task
                    key={t.id}
                    task={t}
                    onTaskStatusChange={ (taskId, status) => {
                        props.onTaskStatusChange(props.todolist.id, taskId, status)
                    } }
                />)
            }
        </ul>
        <TodolistFilter filterValue={filterValue} onFilterChange={handleFilterChange} />
    </div>
}


// todo к контрольной:
// map, filter, [...array], useState, onClick, onChange ✅
// reduce, forEach, useRef, props.callback  ❌

// to second sprint:
// useRef, props.callback ✅
// reduce, forEach ❌
