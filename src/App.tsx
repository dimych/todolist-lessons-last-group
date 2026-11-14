// noinspection TypeScriptExplicitMemberType

import './App.css'
import {Todolist} from './Todolist'
import {type ChangeEvent, type KeyboardEvent, useEffect, useRef, useState} from "react";

// const color1 = {value: 'red'}
// const color2 = {value: 'red'}

// CRUD
function uuid() {
    return crypto.randomUUID()
}

const todolistsFromServer = [
    {
        id: uuid(), title: 'что купить', tasks: [
            {id: uuid(), title: 'молоко', isDone: true},
            {id: uuid(), title: 'хлеб', isDone: false},
            {id: uuid(), title: 'яйца', isDone: false},
        ]
    },
    {
        id: uuid(), title: 'выучить', tasks: [
            {id: uuid(), title: 'HTML&CSS', isDone: true},
            {id: uuid(), title: 'JS', isDone: true},
            {id: uuid(), title: 'React', isDone: false},
        ]
    },
    {
        id: uuid(), title: 'тренировка', tasks: [
            {id: uuid(), title: 'разминка', isDone: true},
            {id: uuid(), title: 'отжимания', isDone: false},
        ]
    },
]

// class Car {
// }
//
// const c1 = new Car()
// const c2 = new Car()

export type TodolistType = typeof todolistsFromServer[number];
export type TaskType = typeof todolistsFromServer[number]['tasks'][number];

// fibers tree: { type: App, state, props, children: [{type: Totolist, state, props},{}, {}] }


// const array: Array<number> = [12,23,34]
// console.log(array)
// useState<number | string>(true)

function App() {
    console.log('App rendering')
    const newTotodolistTaskStatusInputRef = useRef<HTMLInputElement>(null);
    const [todolists, setTodolists] = useState<null | TodolistType[]>(null)
    const [newTodolistTitle, setNewTodolistTitle] = useState('')

    useEffect(() => {
        // как будто делаем запрос на апишку на бекенд за тудулистами
        setTimeout(() => {
            setTodolists(todolistsFromServer)
        }, 2000)
    }, [])

    const handleDeleteTodolist = (todolistIdToDelete: number) => {
        if (!todolists) return;

        const newTotodlistsArray = todolists
            .filter((tl) => tl.id !== todolistIdToDelete)

        setTodolists(newTotodlistsArray)
    }

    const handleRefreshClick = () => {
        setTodolists(null)
        setTimeout(() => {
            setTodolists(todolistsFromServer)
        }, 1000)
    }

    const handleAddTodolistClick = () => {
        if (!todolists) return;
        if (!newTotodolistTaskStatusInputRef.current) return;
        //document.querySelector() // ❌

        const newTodolist: TodolistType = {
            id: Math.random(),
            title: newTodolistTitle,
            tasks: [{id: uuid(), title: 'new task', isDone: newTotodolistTaskStatusInputRef.current.checked}],
        }
        const newTodolists = [newTodolist, ...todolists]

        setTodolists(newTodolists)

        setNewTodolistTitle('')
    }

    const handleNewTodolistTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTodolistTitle(event.currentTarget.value)
    }

    const handleNewTodolistTitleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleAddTodolistClick()
        }
        console.log(KeyboardEvent)
    }

    const changeTaskStatus = (todolistId: TodolistType['id'],
                              taskId: TaskType['id'], status: boolean) => {
        const newTodolists = todolists
            .map(tl => tl.id !== todolistId
                ? tl
                : {
                    ...tl,
                    tasks: tl.tasks
                        .map(t => t.id !== taskId
                        ? t
                        : {...t, isDone: status}),
                }
            )


        setTodolists(newTodolists)
    }


    // ========== render algorithm
    return <>
        <h1>Todolists:</h1>
        <button onClick={handleRefreshClick}>Refresh</button>
        <hr/>
        <input value={newTodolistTitle}
               onChange={handleNewTodolistTitleChange}
               onKeyUp={handleNewTodolistTitleKeyUp}/>
        <input type={'checkbox'} ref={newTotodolistTaskStatusInputRef}/>
        <button onClick={handleAddTodolistClick}>add new todolist</button>
        <hr/>
        {false}{true}{null}{undefined}

        {!todolists && <span>Loading....</span>}

        {todolists && todolists.length === 0 && <span>No todolists</span>}
        {
            todolists && todolists.map(tl => <div key={tl.id}
                                                  style={{border: '1px solid black', padding: '5px', margin: '3px'}}>
                {/*<button onClick={() => handleDeleteTodolistClick(tl.id) }>delete</button>*/}
                <Todolist
                    todolist={tl}
                    onDelete={handleDeleteTodolist}
                    onTaskStatusChange={changeTaskStatus}
                />
            </div>)
        }
    </>
}

export default App
// atomic design : atom (ui kit); molecul -> organisms
// vocabulary - словарь, tesaurus, ubiquitous language
// SLA - SINGLE LAYER ABSTRACTION
// pure fabraction (GRASP)